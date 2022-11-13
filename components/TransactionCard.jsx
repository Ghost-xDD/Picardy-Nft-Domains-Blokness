import React from 'react';
import TransactionContent from './TransactionContent';

const dummyTransaction = [
  {
    id: 1,
    addressFrom: '0x887hhf884900388404o',
    addressTo: '0x987748833ui9948387',
    collectionAddress: '0x884999385093838283478',
    collectionName: 'Moon Birds',
  },
  {
    id: 2,
    addressFrom: '0x23874f884900388404o',
    addressTo: '0x987748833ui9948387',
    collectionAddress: '0x884999385093838283478',
    collectionName: 'Moon Birds',
  },
  {
    id: 3,
    addressFrom: '0x4895084900388404o',
    addressTo: '0x987748833ui9948387',
    collectionAddress: '0x884999385093838283478',
    collectionName: 'Moon Birds',
  },
  {
    id: 4,
    addressFrom: '0x904873h834900388404o',
    addressTo: '0x987748833ui9948387',
    collectionAddress: '0x884999385093838283478',
    collectionName: 'Moon Birds',
  },
];

const TransactionCard = () => {
  return (
    <div className="flex flex-col w-[90%]">
      {/* Wallet NFTs */}
      <section className="antialiased md:ml-[190px] md:w-[90%] h-full text-white px-4">
        <div className="flex flex-col justify-center h-full">
          <div className="w-full max-w-4xl mx-auto feature-bal rounded-3xl shadow-lg  border border-gray-800">
            <header className="px-5 py-4 border-b border-gray-500">
              <h2 className="font-semibold text-xl text-white">
                Transaction History
              </h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-900 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          Address From:
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          Address To:
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          Collection Address:
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">
                          Collection Name:
                        </div>
                      </th>
                    </tr>
                  </thead>
                  {dummyTransaction.map((data, index) => (
                    <TransactionContent
                      key={data.id}
                      addressFrom={data.addressFrom}
                      addressTo={data.addressTo}
                      collectionAddress={data.collectionAddress}
                      collectionName={data.collectionName}
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

export default TransactionCard;
