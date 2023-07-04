import { useReducer, useRef, useState } from "react";
import AddStreetModal from "./components/AddStreetModal";
import AddSuburbModal from "./components/AddSuburbModal";
import Form from "@INPUTS/Form";
import Button from "@INPUTS/Button";
import getAddressCoordinates from "@SERVICES/mapbox/getAddressCoordinates";
import addNotAtHome from "@SERVICES/firebase/addNotAtHome";
import SubmitAddressModal from "./components/SubmitAddressModal";
import Center from "@CONTAINERS/Center";
import { AnyZodObject } from "zod";

const reducer = (state: any, action: any) => {
  if (typeof action.payload === "object") {
    return { ...state, [action.type]: "adding " + action.type };
  }
  const actions: { [key: string]: any } = {
    mapID: {
      mapID: action.payload,
      suburb: "init",
      street: "init",
      houseNumber: "",
      unitNumber: "",
    },
    suburb: {
      ...state,
      suburb: action.payload,
      street: "init",
      houseNumber: "",
      unitNumber: "",
    },
    street: {
      ...state,
      street: action.payload,
      houseNumber: "",
      unitNumber: "",
    },
    houseNumber: {
      ...state,
      houseNumber: action.payload,
    },
    unitNumber: { ...state, unitNumber: action.payload },
  };
  return actions[action.type];
};

type AddAddressType = {
  mapDetails: {
    id: string;
    suburbs: {
      name: string;
      bbox: number[];
      streets: { name: string; lng: number; lat: number }[];
    }[];
  }[];
};

type ReducerType = [
  {
    mapID: string;
    suburb: string;
    street: string;
    houseNumber: string;
    unitNumber: string;
  },
  (action: {
    type: "mapID" | "suburb" | "street" | "houseNumber" | "unitNumber";
    payload: any;
  }) => any
];

const AddAddress = ({ mapDetails }: AddAddressType) => {
  const [state, dispatch]: ReducerType = useReducer(reducer, {
    mapID: localStorage.getItem("addAddressMapID") || "init",
    suburb: localStorage.getItem("addAddressSuburb") || "init",
    street: localStorage.getItem("addAddressStreet") || "init",
    houseNumber: localStorage.getItem("addAddressHouseNumber") || "",
    unitNumber: localStorage.getItem("addAddressUnitNumber") || "",
    mapData: {},
  });
  const [submit, setSubmit] = useState(false);
  const houseNumberRef = useRef<any>(null);

  const currentMapIndex = () => {
    return Math.max(
      0,
      mapDetails.findIndex((map: any) => map.id === state.mapID)
    );
  };

  const currentSuburbIndex: () => number = () => {
    if (state.mapID === "init") {
      return 0;
    }

    return Math.max(
      0,
      mapDetails[currentMapIndex()]?.suburbs.findIndex(
        (suburb) => suburb.name === state.suburb
      )
    );
  };

  const currentStreetIndex: () => number = () => {
    return mapDetails[currentMapIndex()].suburbs[
      currentSuburbIndex()
    ].streets.findIndex((street) => street.name === state.street);
  };

  const suburbOptions =
    mapDetails.length === 0
      ? []
      : mapDetails[currentMapIndex()].suburbs.map((suburb: any) => suburb.name);

  const streetOptions =
    mapDetails.length === 0
      ? []
      : mapDetails[currentMapIndex()].suburbs.length === 0
      ? []
      : mapDetails[currentMapIndex()].suburbs[currentSuburbIndex()].streets.map(
          (street: any) => street.name
        );

  return (
    <>
      <div className="flex justify-center p-2 w-full">
        <Form>
          {/* Map Select */}
          <Form.Select
            onChange={(val) => {
              localStorage.setItem("addAddressMapID", val);
              localStorage.removeItem("addAddressSuburb");
              localStorage.removeItem("addAddressStreet");
              localStorage.removeItem("addAddressUnitNumber");
              localStorage.removeItem("addAddressHouseNumber");
              dispatch({ type: "mapID", payload: val });
            }}
            options={mapDetails.map((map) => map.id)}
            placeholder="Map"
            value={state.mapID}
            width="full"
            height="md"
          ></Form.Select>
          <div className="h-2"></div>
          {/* Suburb Select */}
          {state.mapID !== "init" && (
            <Form.Select
              onChange={(val) => {
                localStorage.setItem("addAddressSuburb", val);
                localStorage.removeItem("addAddressStreet");
                localStorage.removeItem("addAddressUnitNumber");
                localStorage.removeItem("addAddressHouseNumber");
                dispatch({ type: "suburb", payload: val });
              }}
              value={state.suburb}
              options={[
                ...suburbOptions,
                <span className="text-blue-400">add new suburb</span>,
              ]}
              placeholder="Suburb"
              width="full"
              height="md"
            />
          )}
          <div className="h-2"></div>
          {/* Street Select */}
          {state.suburb === "init" ? null : (
            <Form.Select
              onChange={(val) => {
                localStorage.setItem("addAddressStreet", val);
                localStorage.removeItem("addAddressUnitNumber");
                localStorage.removeItem("addAddressHouseNumber");
                dispatch({ type: "street", payload: val });
              }}
              value={state.street}
              options={[
                ...streetOptions,
                <span className="text-blue-400">add new street</span>,
              ]}
              placeholder="Street"
              width="full"
              height="md"
            />
          )}
          <div className="h-2"></div>
          <div className="flex">
            {/* Unit Input */}
            {state.houseNumber === "" ? null : (
              <>
                <Form.Alphanumeric
                  value={state.unitNumber}
                  label=""
                  placeholder="Unit"
                  onChange={(value: string) => {
                    localStorage.setItem("addAddressUnitNumber", value);
                    dispatch({ type: "unitNumber", payload: value });
                  }}
                  width="sm"
                  height="md"
                ></Form.Alphanumeric>
              </>
            )}
            <div className="grow"></div>

            {/* House Inout */}
            {state.street === "init" ? null : (
              <Form.Alphanumeric
                value={state.houseNumber}
                label=""
                placeholder="House"
                onChange={(value: string) => {
                  localStorage.setItem("addAddressHouseNumber", value);
                  localStorage.removeItem("addAddressUnitNumber");
                  dispatch({ type: "houseNumber", payload: value });
                }}
                width="sm"
                height="md"
                ref={houseNumberRef}
              ></Form.Alphanumeric>
            )}
          </div>
          <div className="h-8"></div>
          <div className="grid gap-4">
            {state.houseNumber === "" ? null : (
              <Center>
                <Button
                  clickAction={() => {
                    if (document.activeElement instanceof HTMLElement) {
                      document.activeElement.blur();
                    }
                    setSubmit(true);
                  }}
                  width="md"
                  height="md"
                  color="blue"
                >
                  Add
                </Button>
              </Center>
            )}
          </div>
        </Form>
      </div>
      <AddSuburbModal
        isOpen={state.suburb === "adding suburb"}
        closeModal={dispatch}
        map={currentMapIndex()}
      />

      <AddStreetModal
        isOpen={state.street === "adding street"}
        closeModal={dispatch}
        map={currentMapIndex()}
        suburb={currentSuburbIndex()}
        mapDetails={mapDetails}
      />

      {submit && (
        <SubmitAddressModal
          closeModal={setSubmit}
          address={state}
          bbox={
            mapDetails[currentMapIndex()].suburbs[currentSuburbIndex()].bbox
          }
          streetCoordinates={{
            lng: mapDetails[currentMapIndex()].suburbs[currentSuburbIndex()]
              .streets[currentStreetIndex()].lng,
            lat: mapDetails[currentMapIndex()].suburbs[currentSuburbIndex()]
              .streets[currentStreetIndex()].lat,
          }}
          dispatch={dispatch}
        ></SubmitAddressModal>
      )}
    </>
  );
};

export default AddAddress;
