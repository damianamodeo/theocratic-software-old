import Map from "@COMPONENTS/mapbox/Map";
import { useEffect, useRef, useState } from "react";
import UpdateAddressModal from "../../../components/UpdateAddressModal";
import { GeolocateControl, MapRef, Marker } from "react-map-gl";
import useSupercluster from "use-supercluster";
import NHUnitMarkers from "./NHUnitMarkers";
import NHInaccurateMarkers from "./NHInaccurateMarkers";
import NHHouseMarker from "./NHHouseMarker";
import NHCluster from "./NHCluster";
import Markers from "./Markers";

type MapViewType = {
  children?: any;
};

const MapView = ({ children, notAtHomesList }: any) => {
  const [address, setAddress] = useState<any>(undefined);
  const [modalOpen, setModalOpen] = useState(false);
  const mapRef = useRef<MapRef>(null);

  const [viewport, setViewport] = useState<any>({
    latitude: 52.6376,
    longitude: -1.135171,
    // width: "100vw",
    // height: "100vh",
    zoom: 12,
  });

  useEffect(() => {
    setViewport(viewport);

    return () => {};
  }, [notAtHomesList]);

  return (
    <div className={`h-full`}>
      <UpdateAddressModal
        address={address}
        isOpen={modalOpen}
        setModalOpen={setModalOpen}
      ></UpdateAddressModal>
      <Map
        mapRef={mapRef}
        onMoveEnd={() =>
          setViewport({
            ...viewport,
            zoom: mapRef.current ? mapRef.current.getZoom() : null,
          })
        }
      >
        <Markers
          notAtHomesList={notAtHomesList}
          mapRef={mapRef}
          viewport={viewport}
          setViewport={setViewport}
          setAddress={setAddress}
          setModalOpen={setModalOpen}
        ></Markers>
        <GeolocateControl showUserHeading={true} trackUserLocation={true} />
      </Map>
    </div>
  );
};

export default MapView;
