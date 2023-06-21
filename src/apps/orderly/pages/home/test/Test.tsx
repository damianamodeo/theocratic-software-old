import Map from "@COMPONENTS/mapbox/Map";
import { useEffect, useState } from "react";
import { GeolocateControl, Marker } from "react-map-gl";

type TestProps = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const Test = ({ changeSubpage }: TestProps) => {
  const [zoom, setZoom] = useState(null);

  // console.log("Test", `${"variable"}`);
  return (
    <div className={`h-full dark:text-white`}>
      <Map
        onMoveEnd={(map: any) => {
          console.log(map.viewState.zoom);
          setZoom(map.viewState.zoom);
        }}
      >
        <GeolocateControl showUserHeading={true} trackUserLocation={true}/>
      </Map>
    </div>
  );
};

export default Test;
