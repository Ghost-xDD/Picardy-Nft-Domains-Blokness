import React from 'react';

const HomeMinter = () => {
  return (
    <section>
      <form>
        <div className="mb-6 flex items-center md:mx-[400px] text-center">
          <input
            type="text"
            id="last_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-2xl outline-none focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            placeholder="Enter your preferred name"
            required
          />
          <div className="p-0 rounded-r-2xl">
            <select className="focus:outline-none h-[42px]  rounded-r-2xl bg-yellow-600 font-bold">
              <option value="3rd" className="p-2">
                .3rd
              </option>
            </select>
          </div>
        </div>

        <p className="text-white font-bold text-center mb-4">
          Domain Price: 0.003ETH
        </p>

        <button
          type="submit"
          className="text-white font-bold border-2 border-[button-gradient] flex mx-auto justify-center bg-black hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-black dark:hover:bg-black dark:focus:ring-black"
        >
          Buy Domain
        </button>
      </form>
    </section>
  );
};

export default HomeMinter;
