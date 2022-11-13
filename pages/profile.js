import React from 'react';
// import ProfileHeader from '../components/ProfileHeader';
import ProfileInfo from '../components/ProfileInfo';
import DomainCard from '../components/DomainCard';
import TransactionCard from '../components/TransactionCard';
import GetWalletCard from '../components/GetWalletCard';
import DomainHolders from '../components/DomainHolders';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { useState, useEffect } from 'react';

const ProfileHeader = dynamic(
  () => {
    return import('../components/ProfileHeader');
  },
  { ssr: false }
);

const Profile = () => {
  // const url = 'http://localhost:8080/';

  // const getWalletNfts = () => {
  //   axios.get(`${url}getWalletNfts`).then((response) => {
  //     console.log(response.data);
  //   });
  // };

  // useEffect(() => {
  //   getWalletNfts();
  // }, []);

  return (
    <div className="w-full h-full mt-12 text-white black-bg-gradient">
      <ProfileHeader />

      <div className="mx-[20px] block items-center mt-20 md:flex md:mx-0 ">
        <ProfileInfo />
      </div>
      <div>
        <TransactionCard />
      </div>
      <div className="mt-8">
        <GetWalletCard />
      </div>
      <div className="mt-8">
        <DomainHolders />
      </div>
    </div>
  );
};

export default Profile;
