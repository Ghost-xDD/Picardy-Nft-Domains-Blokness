import React from 'react';
import { BiUser } from 'react-icons/bi';

const TransactionContent = ({
  addressFrom,
  addressTo,
  collectionAddress,
  collectionName,
}) => {
  return (
    <>
      <tbody className="text-sm divide-y divide-gray-100">
        <tr>
          <td className="p-2 whitespace-nowrap">
            <div className="flex items-center">
              <div className="w-10 text-2xl pt-2 h-10 flex-shrink-0 mr-2 sm:mr-3">
                <BiUser />
              </div>
              <div className="font-medium text-white">{addressFrom}</div>
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">{addressTo}</div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left font-medium text-white">
              {collectionAddress}
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-lg text-center">{collectionName}</div>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default TransactionContent;
