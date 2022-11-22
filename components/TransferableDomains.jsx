import { useState, useEffect } from 'react';
import domainResolverAbi from '../constants/domainResolver.json';
import { useAccount } from 'wagmi';
import { ethers } from 'ethers';
import { config } from '../constants';
import DomainCard from './DomainCard';

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

    const defaultDomain = await domainResolver.getDefaultDomain(address, tld);

    console.log(defaultDomain);

    const domainUri = await domainResolver.getDomainTokenUri(
      defaultDomain,
      tld
    );
    const formatImage = window.atob(domainUri.substring(29));

    const result = JSON.parse(formatImage);
    setResponse(result);
    console.log(result);
  };

  useEffect(() => {
    getProfileDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <DomainCard response={response} />
    </div>
  );
};

export default TransferableDomains;
