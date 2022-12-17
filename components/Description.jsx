import React from "react";
import Fill from "../components/svg/Fill";
import Select from "../components/svg/Select";
import Buy from "../components/svg/Buy";

const Description = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center  text-white mt-32 ">
        <h1 className="text-4xl font-bold">
          Get Your Picardy Domains in Few Steps
        </h1>
        <p className="mt-4 text-white">
          Become an owner of a permissionless domain in 3 easy steps
        </p>
      </div>

      <div className="flex flex-col text-white text-center items-center justify-center mt-10 gap-16 md:flex-row md:gap-24">
        <div>
          <Fill />
          <p className="mt-2">
            Put in Name <br />
            Choice
          </p>
        </div>

        <div>
          <Select />
          <p className="mt-2">Select Domain</p>
        </div>

        <div>
          <Buy />
          <p className="mt-2">Mint Domain</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
