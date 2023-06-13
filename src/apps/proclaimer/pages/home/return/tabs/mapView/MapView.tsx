// import Map from "@COMPONENTS/mapbox/Map";
import { useEffect, useState } from "react";
import MapRender from "./components/MapRender";

type MapViewType = {
  children?: any;
};

const MapView = ({ children, notAtHomesList }: any) => {
  const [addresses, setAddresses] = useState(notAtHomesList);

  const [page, setPage] = useState(
    <div className="grid place-items-center h-full dark:text-white">
      LOADING...
    </div>
  );
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (initialLoad) {
      const timer = setTimeout(() => {
        setPage(<MapRender notAtHomesList={notAtHomesList}></MapRender>);
      }, 310);
      setInitialLoad(false);
      return () => clearTimeout(timer);
    } else {
      setPage(<MapRender notAtHomesList={notAtHomesList}></MapRender>);
    }  
  }, [notAtHomesList]);

  return <>{page}</>;
};

export default MapView;
