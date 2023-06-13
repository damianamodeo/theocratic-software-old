import Accordian from "@CONTAINERS/Disclosure";
import { useState } from "react";
import UpdateAddressModal from "../../components/UpdateAddressModal";

type MapsListType = {
  mapNumbers?: any;
};

const MapsList = ({ mapNumbers }: MapsListType) => {
  const [address, setAddress] = useState<any>(undefined);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={``}>
      <UpdateAddressModal
        address={address}
        isOpen={modalOpen}
        setModalOpen={setModalOpen}
      ></UpdateAddressModal>
      {mapNumbers
        .filter((address: any) => {
          return address.mapNumber !== undefined;
        })
        .sort((a: any, b: any) => b.total - a.total)
        .map((item: any, index: number) => {
          return (
            <div key={index} className="mx-auto w-full max-w-md p-2">
              <Accordian
                title={
                  <div className="p-3 w-full bg-neutral-200 dark:bg-neutral-700 text-2xl">
                    {`Map ${item.mapNumber} (${item.total})`}
                  </div>
                }
              >
                {item.streets
                  .sort((a: any, b: any) => a.street.localeCompare(b.street))
                  .map((street: any, index: any) => (
                    <div key={index} className="my-2 mx-6">
                      <Accordian
                        title={
                          <div className="p-2 w-full bg-neutral-200 dark:bg-neutral-700 rounded">
                            {`${street.street} ${street.addresses.length}`}
                          </div>
                        }
                        key={index}
                      >
                        <div
                          className={` grid grid-cols-[repeat(auto-fill,minmax(3.5rem,1fr))]`}
                        >
                          {street.addresses
                            .sort(
                              (
                                a: { houseNumber: number; unitNumber: number },
                                b: { houseNumber: number; unitNumber: number }
                              ) => {
                                const strA =
                                  String(a.unitNumber * 0.001) +
                                  String(a.unitNumber * 0.001);
                                const strB =
                                  String(b.unitNumber * 0.001) +
                                  String(b.unitNumber * 0.001);
                                return strA.toLowerCase().localeCompare(strB);
                              }
                            )
                            .map((address: any, index: any) => (
                              <div key={index}>
                                <div
                                  onClick={() => {
                                    setAddress(address);
                                    setModalOpen(true);
                                  }}
                                  className={`m-1 py-2 rounded text-center dark:text-white ${
                                    address.houseNumber % 2 === 0
                                      ? "dark:bg-neutral-600 bg-neutral-300"
                                      : "dark:bg-neutral-800 bg-neutral-400"
                                  }`}
                                >
                                  {address.unitNumber &&
                                    `${address.unitNumber}/`}
                                  {address.houseNumber}
                                </div>
                              </div>
                            ))}
                        </div>
                      </Accordian>
                    </div>
                  ))}
              </Accordian>
            </div>
          );
        })}
    </div>
  );
};

export default MapsList;
