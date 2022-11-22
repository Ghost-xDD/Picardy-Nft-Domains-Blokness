import React from 'react';
import GetWalletContent from './GetWalletContent';

const dummyWallets = [
  {
    value: 'Skull',
    trait_type: 'Left Arm',
    trait_count: 29,
  },
  {
    value: 'Big Hat',
    trait_type: 'Hat',
    trait_count: 84,
  },
  {
    value: 'Grey / White V-Neck Sweater Vest and Shirt',
    trait_type: 'Upper Body',
    trait_count: 133,
  },
  {
    value: ' Sweater Vest and Shirt',
    trait_type: 'Upper Torso',
    trait_count: 122,
  },
];

const GetWalletCard = () => {
  return (
    <div className="flex flex-col w-[90%] shadow-xl">
      {/* Wallet NFTs */}
      <section className="antialiased md:ml-[190px] md:w-[90%] h-full text-white px-4">
        <div className="flex flex-col justify-center h-full">
          <div className="w-full max-w-4xl mx-auto feature-bal rounded-3xl shadow-lg  border border-gray-800">
            <header className="px-5 py-4 border-b border-gray-500">
              <h2 className="font-semibold text-xl text-white">
                NFTs per Wallet
              </h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full ">
                  <thead className="text-xs font-semibold uppercase text-gray-900 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          Trait Count:
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          Trait Type:
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          Collection Address:
                        </div>
                      </th>
                    </tr>
                  </thead>
                  {dummyWallets.map((data, index) => (
                    <GetWalletContent
                      key={index}
                      value={data.value}
                      trait_type={data.trait_type}
                      trait_count={data.trait_count}
                    />
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetWalletCard;
