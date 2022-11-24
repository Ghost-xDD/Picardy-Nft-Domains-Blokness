import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import picardyDomainFactoryAbi from "../constants/picardyDomainFactoryAbi.json";
import picardyDomainAbi from "../constants/picardyDomainAbi.json";
import { ethers } from "ethers";
import { config } from "../constants";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeMinter = () => {
  const { address, isConnected } = useAccount();
  const [userDomain, setUserDomain] = useState("");
  const [selectTld, setSelectTld] = useState(".link");
  const [selectTldPrice, setSelectTldPrice] = useState(0.0);
  const [domainFactory, setDomainFactory] = useState("");
  const [tlds, setTlds] = useState();

  const notify = (e) => {
    e.preventDefault();

    toast.error("Please connect a Compatible Web3 Wallet", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const getTldPrice = async (tld) => {
    const provider = new ethers.providers.JsonRpcProvider(
      process.env.NEXT_PUBLIC_POLYGON_MUMBAI_ENDPOINT
    );

    const tldAddress = await domainFactory.tldNamesAddresses(tld);

    const domainContract = new ethers.Contract(
      tldAddress,
      picardyDomainAbi,
      provider
    );

    const price = await domainContract.price();
    const formatPrice = ethers.utils.formatEther(price);
    setSelectTldPrice(formatPrice);
    console.log(formatPrice);
  };

  const getTldDomains = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      process.env.NEXT_PUBLIC_POLYGON_MUMBAI_ENDPOINT
    );
    // const signer = provider.getSigner();

    const newDomainFactory = new ethers.Contract(
      config.domainFactoryAddress,
      picardyDomainFactoryAbi,
      provider
    );

    setDomainFactory(newDomainFactory);

    const tldAddresses = await newDomainFactory.getTldsArray().then((res) => {
      setTlds(res);
      console.log(res);
    });
  };

  const handleChange = (event) => {
    setSelectTld(event.target.value);
    getTldPrice(event.target.value);
    console.log(event.target.value);
  };

  useEffect(() => {
    getTldDomains();
  }, []);

  const mintDomain = async (e) => {
    e.preventDefault();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const formatPrice = ethers.utils.parseUnits(selectTldPrice, "ether");
    const formattedName = userDomain.replace(/\s+/g, "").toLowerCase().trim();
    const tldAddress = await domainFactory.tldNamesAddresses(selectTld);

    console.log(formattedName, tldAddress);

    const domainContract = new ethers.Contract(
      tldAddress,
      picardyDomainAbi,
      signer
    );

    const mint = await domainContract.mint(formattedName, address, {
      value: formatPrice,
    });
    const receipt = await mint.wait();
    console.log(receipt);
    const txHash = await receipt.transactionHash;
    console.log(txHash);

    // const userInput = userDomain.concat(selectTld);
    // const formatInput = userInput.replace(/\s+/g, '').toLowerCase().trim();

    // const userName =
  };
  console.log(isConnected);

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
            value={userDomain}
            onChange={(e) => setUserDomain(e.target.value)}
          />
          <div className="p-0 rounded-r-2xl">
            <select
              className="focus:outline-none h-[42px]  rounded-r-2xl bg-yellow-600 font-bold"
              onChange={handleChange}
            >
              {tlds
                ? tlds.map((option, index) => (
                    <option key={index} value={option} className="p-2">
                      {option}
                    </option>
                  ))
                : "..."}
            </select>
          </div>
        </div>

        <p className="text-white font-bold text-center mb-4">
          Domain Price: {selectTldPrice} MATIC
        </p>

        {isConnected && (
          <button
            type="submit"
            className="text-white font-bold border-2 border-[button-gradient] flex mx-auto justify-center bg-black hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-black dark:hover:bg-black dark:focus:ring-black"
            onClick={mintDomain}
          >
            Buy Domain
          </button>
        )}
        {!isConnected && (
          <button
            type="submit"
            className="text-white font-bold border-2 border-[button-gradient] flex mx-auto justify-center bg-black hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-black dark:hover:bg-black dark:focus:ring-black"
            onClick={notify}
          >
            Buy Domain
            <ToastContainer />
          </button>
        )}
      </form>
    </section>
  );
};

export default HomeMinter;
