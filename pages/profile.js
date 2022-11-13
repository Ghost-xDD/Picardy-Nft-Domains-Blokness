import React from "react";
// import ProfileHeader from '../components/ProfileHeader';
import ProfileInfo from "../components/ProfileInfo";
import DomainCard from "../components/DomainCard";
import TransactionCard from "../components/TransactionCard";
import GetWalletCard from "../components/GetWalletCard";
import DomainHolders from "../components/DomainHolders";
import dynamic from "next/dynamic";
import axios from "axios";
import { useState, useEffect } from "react";

const ProfileHeader = dynamic(
  () => {
    return import("../components/ProfileHeader");
  },
  { ssr: false }
);

const Profile = () => {
  // const apiUrl = "http://api.blokness.io/";
  // const apiKey = "EABD1AC1-53E9-4C9F-8F77-2027F309148D";

  const url = "http://localhost:8080/";

  const getWalletNfts = () => {
    const body = {
      domainAddress: "0x23581767a106ae21c074b2276d25e5c3e136a68b",
    };
    axios
      .get(`${url}domainTransactions`, body, {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public",
        },
      })
      .then((response) => {
        console.log(response);
        //console.log(response.data);
      });
  };

  // const getFromApi = async (url) => {
  //   try {
  //     const { data } = await axios.get(url, {
  //       headers: {
  //         "x-api-key": apiKey,
  //         "Cache-Control": "no-cache",
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "'http://localhost:3000'",
  //         "Access-Control-Allow-Headers": "*",
  //       },
  //     });
  //     return data;
  //   } catch (err) {
  //     console.log(`unable to get data from ${url} - ${err}`);
  //   }
  // };

  // const getWalletNfts = async (wallet) => {
  //   const url = `${apiUrl}nfts?wallet=${wallet}`;
  //   const nfts = await getFromApi(url);
  //   return nfts;
  // };

  useEffect(() => {
    getWalletNfts("0x4c9F7207be28278b9DCA129f2e211AcfFf48Fb01");
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
