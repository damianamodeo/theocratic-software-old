import { Marker } from "react-map-gl";

type NHClusterType = {
  cluster: any;
  supercluster: any;
  mapRef: any;
  setViewport: any;
  viewport: any;
};

const NHCluster = ({
  cluster: {
    id,
    properties: { point_count },
    geometry: {
      coordinates: [lng, lat],
    },
  },
  supercluster,
  mapRef,
  setViewport,
  viewport,
}: NHClusterType) => {
  return (
    <Marker key={id} latitude={lat} longitude={lng}>
      <div
        className={`${
          point_count < 5
            ? "bg-blue-500 h-6 w-6"
            : point_count < 10
            ? "bg-blue-500 h-7 w-7"
            : point_count < 20
            ? "bg-blue-500 h-8 w-8 text-lg"
            : point_count < 35
            ? "bg-blue-500 h-9 w-9 text-lg"
            : point_count < 50
            ? "bg-blue-500 h-10 w-10 text-xl"
            : point_count < 100
            ? "bg-blue-500 h-12 w-12 text-xl"
            : point_count < 200
            ? "bg-blue-500 h-16 w-16 text-2xl"
            : point_count < 300
            ? "bg-blue-500 h-20 w-20 text-2xl"
            : point_count < 400
            ? "bg-blue-500 h-24 w-24 text-3xl"
            : "bg-blue-500 h-28 w-28 text-4xl"
        }
                   grid place-items-center  rounded-full text-white`}
        // style={{
        //   width: `${10 + (point_count / points.length) * 20}px`,
        //   height: `${10 + (point_count / points.length) * 20}px`,
        // }}
        onClick={(event: any) => {
          mapRef.current?.easeTo({
            center: [lng, lat],
            zoom: supercluster?.getClusterExpansionZoom(id),
            duration: 500,
          });
          setViewport({
            ...viewport,
            zoom: supercluster?.getClusterExpansionZoom(id),
          });
        }}
      >
        {point_count}
      </div>
    </Marker>
  );
};

export default NHCluster;
