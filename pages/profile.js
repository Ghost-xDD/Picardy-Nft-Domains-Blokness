import React from "react";
// import ProfileHeader from '../components/ProfileHeader';
import ProfileInfo from "../components/ProfileInfo";
import DomainCard from "../components/DomainCard";
import TransactionCard from "../components/TransactionCard";
import GetWalletCard from "../components/GetWalletCard";
import DomainHolders from "../components/DomainHolders";
import dynamic from "next/dynamic";
import axios from "axios";
import { setupCache } from "axios-cache-adapter";
import { useState, useEffect } from "react";

const ProfileHeader = dynamic(
  () => {
    return import("../components/ProfileHeader");
  },
  { ssr: false }
);

const cache = setupCache({
  maxAge: 15 * 60 * 1000,
});

const api = axios.create({
  adapter: cache.adapter,
});

const Profile = () => {
  const url = "http://localhost:8080/";

  const getWalletNfts = () => {
    const body = {
      domainAddress: "0x23581767a106ae21c074b2276d25e5c3e136a68b",
    };
    axios
      .get(`${url}walletNft`, body, {
        headers: {
          "Content-Type": "application/json, text/plain, */*, accept-encoding",
          "Cache-Control": "public",
        },
      })
      .then((response) => {
        console.log(response);
      });
  };

  useEffect(() => {
    getWalletNfts("0x5cd9665b52049a00e0c364c727f968d992714111");
  }, []);

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
        <DomainHolders />{" "}
      </div>
    </div>
  );
};

export default Profile;
