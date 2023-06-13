import { Marker } from "react-map-gl";

type NHHouseMarkerType = {
  cluster: any;
  setAddress: any;
  setModalOpen: any;
};

const NHHouseMarker = ({
  cluster: {
    id,
    properties: { houseNumber, ...address },
    geometry: {
      coordinates: [lng, lat],
    },
  },
  setAddress,
  setModalOpen,
}: NHHouseMarkerType) => {
  return (
    <Marker key={id} latitude={lat} longitude={lng}>
      <button
        onClick={() => {
          setAddress({ houseNumber, ...address });
          setModalOpen(true);
        }}
        className="bg-red-500 rounded-full w-6 h-6 text-lg-xx grid place-items-center"
      >
        {houseNumber}
      </button>
    </Marker>
  );
};

export default NHHouseMarker;
