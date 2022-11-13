import React from 'react';
import Image from 'next/image';
import { BiUser } from 'react-icons/bi';
import styles from '../helper/style';

const GetWalletContent = ({ trait_type, trait_count, value }) => {
  return (
    <>
      <tbody className="text-sm divide-y divide-gray-100">
        <tr>
          <td className="p-2 whitespace-nowrap">
            <div className="flex items-center">
              <div className="w-10 text-2xl pt-2 h-10 flex-shrink-0 mr-2 sm:mr-3">
                <BiUser />
              </div>
              <div className=" text-white text-lg">{trait_type}</div>
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left text-lg">{trait_count}</div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left text-lg  text-white">{value}</div>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default GetWalletContent;
