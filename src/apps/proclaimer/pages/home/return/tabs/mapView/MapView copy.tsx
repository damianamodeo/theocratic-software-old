// import Map from "@COMPONENTS/mapbox/Map";
import { useEffect, useState } from "react";
import MapRender from "./components/MapRender";

type MapViewType = {
  children?: any;
};

const MapView = ({ children, notAtHomesList }: any) => {
  const [page, setPage] = useState(
    <div className="grid place-items-center h-full dark:text-white">LOADING...</div>
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      // Function to run after 3 seconds
      console.log("Function executed after 3 seconds");
      setPage(<MapRender notAtHomesList={notAtHomesList}></MapRender>)
    }, 310);

    // Clean up the timer if the component unmounts before the delay
    return () => clearTimeout(timer);
  }, []);

  return <>{page}</>

};

export default MapView;
