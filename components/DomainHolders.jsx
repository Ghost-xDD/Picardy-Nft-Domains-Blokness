import React from 'react';
import DomainHoldersContent from './DomainHoldersContent';

const dummyHolders = [
  {
    walletAddress: '0x9848839498885hi4494jj49',
    nftNumber: '34',
  },
  {
    walletAddress: '0x788490308h4884930ko3',
    nftNumber: '10',
  },
  {
    walletAddress: '0x6894007474jjfmkde99',
    nftNumber: '2',
  },
  {
    walletAddress: '0x293948500glo0494903',
    nftNumber: '44',
  },
];

const DomainHolders = () => {
  return (
    <div className="flex flex-col w-[90%] shadow-xl">
      {/* Wallet NFTs */}
      <section className="antialiased md:ml-[190px] md:w-[90%] h-full text-white px-4">
        <div className="flex flex-col justify-center h-full">
          <div className="w-full max-w-4xl mx-auto feature-bal rounded-3xl shadow-lg  border border-gray-800">
            <header className="px-5 py-4 border-b border-gray-500">
              <h2 className="font-semibold text-xl text-white">
                NFT Domain Holders
              </h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full ">
                  <thead className="text-xs font-semibold uppercase text-gray-900 bg-gray-50 rounded-full">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          Wallet Address
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          Number Of NFTs
                        </div>
                      </th>
                    </tr>
                  </thead>
                  {dummyHolders.map((data, index) => (
                    <DomainHoldersContent
                      key={index}
                      walletAddress={data.walletAddress}
                      nftNumber={data.nftNumber}
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

export default DomainHolders;
