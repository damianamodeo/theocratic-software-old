import { RefObject } from "react";
import { MapRef, Map as Mapbox } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useTernaryDarkMode } from "usehooks-ts";

type MapboxType = {
  children?: any;
  mapRef?: RefObject<MapRef>;
  onMoveEnd?: any;
  onLoad?: any;
};

const Map = ({ children, mapRef, onMoveEnd, onLoad }: MapboxType) => {
  const { isDarkMode } = useTernaryDarkMode();
  const mapStyle = `mapbox://styles/damianamodeo/${
    isDarkMode ? "clefix5la000901po4wflstdd" : "clefifzvz000u01nw8h84n67m"
  }`;
  return (
    <div className="h-full">
      <Mapbox
        // minZoom={19}
        // maxZoom={20}
        initialViewState={{
          latitude: -32.7316,
          longitude: 151.5525,
          zoom: 11,
        }}
        pitch={0}
        bearing={0}
        mapStyle={mapStyle}
        mapboxAccessToken={import.meta.env.VITE_APP_MAPBOX_TOKEN}
        ref={mapRef}
        onMoveEnd={(event: any) => {
          onMoveEnd(event);
        }}
        // onLoad={(event: any) => {
        //   onLoad(event);
        // }}
        style={{ width: "100%", height: "100%" }}
      >
        {children}
      </Mapbox>
    </div>
  );
};

export default Map;
