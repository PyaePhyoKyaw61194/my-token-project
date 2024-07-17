import { useEffect, useState } from "react";
import { ethers } from "ethers";
import useContract from "../hooks/useContract";

const TokenInfo = () => {
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [tokenTotalSupply, setTokenTotalSupply] = useState("");
  const { contract } = useContract();

  useEffect(() => {
    getContractInfo();
  }, [contract]);
  const getContractInfo = async () => {
    if (!contract) return;
    const name = await contract.name();
    setTokenName(name);

    const symbol = await contract.symbol();
    setTokenSymbol(symbol);

    const supply = await contract.totalSupply();
    setTokenTotalSupply(ethers.formatUnits(supply, 18));
  };
  return (
    <div>
      <div>Token Name : {tokenName}</div>
      <div>Token Symbol : {tokenSymbol}</div>
      <div>Total Supply : {tokenTotalSupply}</div>
    </div>
  );
};

export default TokenInfo;
