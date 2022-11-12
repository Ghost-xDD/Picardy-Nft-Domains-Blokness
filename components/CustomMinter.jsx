import React from 'react';

const CustomMinter = () => {
  return (
    <section>
      <form>
        <div className="mb-6 flex items-center md:mx-[540px] text-center">
          <input
            type="text"
            id="last_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-2xl outline-none focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            placeholder="Price/per mint"
            required
          />
          <div className="p-0 rounded-r-2xl">
            <select className="focus:outline-none h-[42px] cursor-pointer rounded-r-2xl bg-yellow-600 font-bold">
              <option value="3rd" className="p-2 px-2">
                MATIC
              </option>
            </select>
          </div>
        </div>

        <div className=" flex items-center md:mx-[400px] text-center">
          <input
            type="text"
            id="last_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl outline-none focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            placeholder="Enter your TLD"
            required
          />
        </div>
        <p className="text-gradient font-bold text-center mb-6">
          except .eth, .ens, .com, .org, .net, .smol, .punk, .dao, .xyz
        </p>

        <button
          type="submit"
          className="text-white font-bold border-2 border-[button-gradient] flex mx-auto justify-center bg-black hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-black dark:hover:bg-black dark:focus:ring-black"
        >
          Buy TLD
        </button>
      </form>
    </section>
  );
};

export default CustomMinter;
