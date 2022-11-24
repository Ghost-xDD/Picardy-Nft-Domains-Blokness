import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import ProfileInfo from '../components/ProfileInfo';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { useAccount } from 'wagmi';
// import { setupCache } from "axios-cache-adapter";
import { useState, useEffect } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from '../helper/style';

const TransferableDomains = dynamic(
  () => {
    return import('../components/TransferableDomains');
  },
  { ssr: false }
);

// const cache = setupCache({
//   maxAge: 15 * 60 * 1000,
// });

// const api = axios.create({
//   adapter: cache.adapter,
// });

const Profile = () => {
  const { isConnected } = useAccount();
  const [mounted, setMounted] = useState(false);

  const url = 'http://localhost:8080/';

  const getWalletNfts = () => {
    const body = {
      domainAddress: '0x23581767a106ae21c074b2276d25e5c3e136a68b',
    };
    axios
      .get(`${url}walletNft`, body, {
        headers: {
          'Content-Type': 'application/json, text/plain, */*, accept-encoding',
          'Cache-Control': 'public',
        },
      })
      .then((response) => {
        console.log(response);
      });
  };

  useEffect(() => {
    setMounted(true);
    // getWalletNfts("0x5cd9665b52049a00e0c364c727f968d992714111");
  }, []);

  return (
    mounted && (
      <>
        {isConnected && (
          <div className="w-full h-full mt-12 text-white black-bg-gradient">
            <ProfileHeader />

            <div className="mx-[20px] block items-center mt-20 md:flex md:mx-0 ">
              <ProfileInfo />

              <div className="flex flex-col ">
                {/* <h3 className=" text-2xl md:ml-[280px]">Domains</h3> */}

                <TransferableDomains />
                {/* <DomainCard /> */}
              </div>
            </div>
          </div>
        )}
        {!isConnected && (
          <div
            className={`h-full md:flex-row flex-col ${styles.paddingY} items-center text-center w-full px-[400px]`}
          >
            <div
              className={`feature-bal rounded-3xl mx-0 flex flex-col items-center gap-6 py-20 my-20 md:rounded-2xl xl:px-0 sm:px-28 px-1 w-full`}
            >
              <h1 className="text-white w-full h-full mt-12">
                Please Connect Wallet to Continue
              </h1>
              <span>
                <ConnectButton />
              </span>
            </div>
          </div>
        )}
      </>
    )
  );
};

export default Profile;
