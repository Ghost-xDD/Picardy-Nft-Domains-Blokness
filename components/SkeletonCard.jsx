import React from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from '../helper/style';

const SkeletonCard = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item, index) => (
      <div
        className={`h-full md:flex-row flex-col ${styles.paddingY} md:ml-[250px] md:w-[90%]`}
        key={index}
      >
        <div
          className={`feature-bal rounded-3xl mx-0 block items-center justify-between flex-1 ${styles.flexStart} flex-col gap-6 py-10 md:flex-row md:mx-[30px] md:rounded-2xl xl:px-0 sm:px-28 px-1`}
        >
          <Skeleton
            width={30}
            height={30}
            // borderRadius="3rem"
            style={{ padding: '50px' }}
            baseColor="#555"
            duration={0.9}
          />
          {/* &nbsp;&nbsp; */}
          <div className="">
            <Skeleton width={200} height={10} baseColor="#555" duration={0.9} />
            <Skeleton width={200} height={10} baseColor="#555" duration={0.9} />
            {/* <Skeleton /> */}
          </div>
        </div>
      </div>
    ));
};
export default SkeletonCard;
