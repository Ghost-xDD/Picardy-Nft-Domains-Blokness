import React from 'react';
import Head from 'next/head';
import { Hero,  HomeMinter, Contact } from '../components';

const header = 'Permissionless NFT Domains';
const description = 'Mint your identity on the Blockchain';

const CustomTLD = () => {
  return (
    <div>
      <Head>
        <title>Buy Domain | Picardy</title>
        <meta
          name="description"
          content="Mint your identity on the blockchain"
        />
      </Head>

      <Hero header={header} description={description} />

      <HomeMinter />
      <div className="bg-black">
        <Contact />
      </div>
    </div>
  );
};

export default CustomTLD;
