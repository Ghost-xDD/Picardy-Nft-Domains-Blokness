import React from 'react';
import styles from '../helper/style';

const ComingSoon = () => {
  return (
    <div
      className={`h-[50vh] md:flex-row flex-col ${styles.paddingY} md:ml-[250px] md:w-[70%]`}
    >
      <div
        className={`feature-bal rounded-3xl mx-0 block items-center justify-between flex-1 ${styles.flexStart} flex-col gap-6 md:flex-row md:mx-[30px] md:rounded-2xl xl:px-0 sm:px-28 px-1 py-[120px]`}
      >
        <p className="text-center w-full text-2xl font-bold italic">
          Coming Soon....😃
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
