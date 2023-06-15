import { useEffect } from "react";
import NHCluster from "./NHCluster";
import NHHouseMarker from "./NHHouseMarker";
import NHInaccurateMarkers from "./NHInaccurateMarkers";
import NHUnitMarkers from "./NHUnitMarkers";
import useSupercluster from "use-supercluster";

type MarkersType = {
  children?: any;
};

const Markers = ({
  notAtHomesList,
  mapRef,
  viewport,
  setViewport,
  setAddress,
  setModalOpen,
}: any) => {
  const points: any = notAtHomesList
    .filter((address: any) => address.lat !== undefined)
    .filter((address: any) => address.letter !== true)
    .map((address: any) => ({
      type: "Feature",
      properties: {
        cluster: false,
        ...address,
      },
      geometry: {
        type: "Point",
        coordinates: [address.lng, address.lat],
      },
    }));
  const options = {
    radius: 80,
    maxZoom: 14,
  };
  const bounds: any = mapRef.current
    ? mapRef.current.getMap().getBounds().toArray().flat()
    : null;
  const { clusters, supercluster }: any = useSupercluster<any>({
    points,
    bounds,
    zoom: viewport.zoom,
    options,
  });
  let unitArray: any = [];
  let inaccurateArray: any = [];

  return (
    <>
      {clusters.map((cluster: any) => {
        const { cluster: isCluster, unitNumber } = cluster.properties;
        if (isCluster) {
          return (
            <NHCluster
              key={cluster.id}
              cluster={cluster}
              supercluster={supercluster}
              mapRef={mapRef}
              setViewport={setViewport}
              viewport={viewport}
            ></NHCluster>
          );
        }

        if (cluster.properties.relevance < 1) {
          inaccurateArray.push(cluster);
          return;
        }

        if (unitNumber !== "" && typeof parseInt(unitNumber) === "number") {
          unitArray.push(cluster);
          return;
        }

        return (
          <NHHouseMarker
            key={cluster.properties.id}
            cluster={cluster}
            setAddress={setAddress}
            setModalOpen={setModalOpen}
          ></NHHouseMarker>
        );
      })}
      {NHInaccurateMarkers({
        addresses: inaccurateArray,
        setAddress: setAddress,
        setModalOpen: setModalOpen,
      })}
      {NHUnitMarkers({
        addresses: unitArray,
        setAddress: setAddress,
        setModalOpen: setModalOpen,
      })}
    </>
  );
};

export default Markers;
