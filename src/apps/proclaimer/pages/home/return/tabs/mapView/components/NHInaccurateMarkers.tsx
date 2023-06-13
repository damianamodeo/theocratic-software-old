import { Marker } from "react-map-gl";

type NHInaccurateMarkersType = {
  addresses: any[];
  setAddress: any;
  setModalOpen: any;
};

const NHInaccurateMarkers = ({ addresses, setAddress, setModalOpen }: NHInaccurateMarkersType) => {
  const xxx = addresses.reduce((result, current) => {
    const category = `id${String(current.geometry.coordinates[0])}${String(
      current.geometry.coordinates[1]
    )}`;
    if (!result[category]) {
      result[category] = [];
    }

    result[category].push(current);

    return result;
  }, []);

  return Object.keys(xxx).map((key: any) =>
    xxx[key]
      .sort((a: any, b: any) =>
        String(a.properties.houseNumber * 0.001)
          .toLowerCase()
          .localeCompare(String(b.properties.c * 0.001).toLowerCase())
      )
      .map((address: any, index: number) => {
        const [longitude, latitude] = address.geometry.coordinates;
        const {
          cluster: isCluster,
          point_count: pointCount,
          category,
          unitNumber,
          houseNumber,
        } = address.properties;
        // console.log(unitNumber)
        const unit = index + 1;
        let angleFactor = Math.sqrt(unit) - 0.8;
        let angle = 4.6 * angleFactor;
        let radius = Math.sqrt(unit) + angleFactor / (unit * 0.2);
        let x = longitude + ((radius + angle) * Math.cos(angle)) / 150000;
        let y = latitude + ((radius + angle) * Math.sin(angle)) / 150000;
        x = Number(x.toFixed(6));
        y = Number(y.toFixed(6));
        return (
          <Marker key={index} longitude={x} latitude={y}>
            <button
              onClick={() => {
                setAddress(address.properties);
                setModalOpen(true);
              }}
              className="bg-purple-500 rounded-full w-6 h-6 text-lg-xx grid place-items-center"
            >
              {houseNumber}
            </button>
          </Marker>
        );
      })
  ); //Log Variable

  // return addresses
  //   .sort((a, b) =>
  //     String(a.properties.unitNumber).localeCompare(
  //       String(b.properties.unitNumber)
  //     )
  //   )
  //   .map((address: any, index: number) => {
  //     const [longitude, latitude] = address.geometry.coordinates;
  //     const {
  //       cluster: isCluster,
  //       point_count: pointCount,
  //       category,
  //       unitNumber,
  //     } = address.properties;
  //     // console.log(unitNumber)
  //     const unit = index + 1;
  //     let angleFactor = Math.sqrt(unit) - 0.8;
  //     let angle = 4.5 * angleFactor;
  //     let radius = Math.sqrt(unit) + angleFactor / (unit * 0.2);
  //     let x = longitude + ((radius + angle) * Math.cos(angle)) / 150000;
  //     let y = latitude + ((radius + angle) * Math.sin(angle)) / 150000;
  //     x = Number(x.toFixed(6));
  //     y = Number(y.toFixed(6));
  //     return (
  //       <Marker key={index} longitude={x} latitude={y}>
  //         <button className="bg-orange-500 rounded-full w-6 h-6 text-lg-xx grid place-items-center">
  //           {unitNumber}
  //         </button>
  //       </Marker>
  //     );
  //   });
};

export default NHInaccurateMarkers;
