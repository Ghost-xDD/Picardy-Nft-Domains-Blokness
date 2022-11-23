import { useState, useEffect } from "react";
import domainResolverAbi from "../constants/domainResolver.json";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import { config } from "../constants";
import DomainCard from "./DomainCard";

const TransferableDomains = () => {
  const { address, isConnected } = useAccount();
  const [response, setResponse] = useState({});

  const getProfileDetails = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const domainResolver = new ethers.Contract(
      config.domainResolverAddress,
      domainResolverAbi,
      signer
    );

    const defaultDomain = await domainResolver.getDefaultDomains(address);
    // console.log("deafult domains:", defaultDomain);

    const defaultDomainArr = defaultDomain.split(" ");
    // console.log("deafult domain array:", defaultDomainArr);
    const domainDetails = await getDefaultDomains(defaultDomainArr);
    // console.log("domain details: ", domainDetails);

    const domainUriArr = await getDomainUri(domainDetails);
    console.log("domain uri", domainUriArr);
  };

  useEffect(() => {
    getProfileDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // converts the array of string to an array of objects containing the domain name and tld
  const getDefaultDomains = async (defaultDomains) => {
    let domainDetailsArr = [];
    let deafultDomainLength;
    if (defaultDomains[1] === "") {
      deafultDomainLength = defaultDomains.length - 1;
    } else {
      deafultDomainLength = defaultDomains.length;
    }
    for (let i = 0; i < deafultDomainLength; i++) {
      let domainDetails = {
        domainName: "",
        tld: "",
      };
      const domain = defaultDomains[i];
      const splitArr = domain.split(".");
      const domainName = splitArr[0];
      const tld = "." + splitArr[1];

      domainDetails.domainName = domainName;
      domainDetails.tld = tld;
      domainDetailsArr.push(domainDetails);
    }

    return domainDetailsArr;
  };

  //this function get the images of all domains
  const getDomainUri = async (domainDetailsArr) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const domainResolver = new ethers.Contract(
      config.domainResolverAddress,
      domainResolverAbi,
      signer
    );

    let domainDetails = [];
    for (let i = 0; i < domainDetailsArr.length; i++) {
      let newDomainDetails = {
        domainName: "",
        tld: "",
        image: "",
      };
      const domainDetail = domainDetailsArr[i];

      //this is where the image is gotten from
      const domainUri = await domainResolver.getDomainTokenUri(
        domainDetail.domainName,
        domainDetail.tld
      );
      const domainImage = window.atob(domainUri.substring(29));
      const result = JSON.parse(domainImage);

      newDomainDetails.domainName = domainDetail.domainName;
      newDomainDetails.tld = domainDetail.tld;
      newDomainDetails.image = result.image;

      domainDetails.push(newDomainDetails);
    }

    return domainDetails;
  };

  return (
    <div>
      <DomainCard response={response} />
    </div>
  );
};

export default TransferableDomains;
