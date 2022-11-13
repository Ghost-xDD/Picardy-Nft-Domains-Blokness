import React from 'react';
import { BiUser } from 'react-icons/bi';

const DomainHoldersContent = ({ walletAddress, nftNumber }) => {
  return (
    <>
      <tbody className="text-sm divide-y divide-gray-100">
        <tr>
          <td className="p-2 whitespace-nowrap">
            <div className="flex items-center">
              <div className="w-10 text-2xl pt-2 h-10 flex-shrink-0 mr-2 sm:mr-3">
                <BiUser />
              </div>
              <div className="font-medium text-white">{walletAddress}</div>
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left text-lg font-bold">{nftNumber}</div>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default DomainHoldersContent;
