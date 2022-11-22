import React from 'react';

import ProfileInfo from '../components/ProfileInfo';
import TransactionCard from '../components/TransactionCard';
import GetWalletCard from '../components/GetWalletCard';
import DomainHolders from '../components/DomainHolders';
import ProfileHeader from '../components/ProfileHeader';

const Portfolio = () => {
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

export default Portfolio;
