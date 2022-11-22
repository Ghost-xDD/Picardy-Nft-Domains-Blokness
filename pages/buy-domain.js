import React from 'react';

import ProfileInfo from '../components/ProfileInfo';
import ProfileHeader from '../components/ProfileHeader';
import ComingSoon from '../components/ComingSoon';

const BuyDomains = () => {
  return (
    <div className="w-full h-full mt-12 text-white black-bg-gradient">
      <ProfileHeader />

      <div className="mx-[20px] block items-center mt-20 md:flex md:mx-0 ">
        <ProfileInfo />
      </div>
      <div>
        <ComingSoon />
      </div>
    </div>
  );
};

export default BuyDomains;
