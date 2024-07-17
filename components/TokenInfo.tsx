import { useEffect, useState } from "react";
import { contract } from "../utils/MyTokenContract";
import { ethers } from "ethers";

const TokenInfo = () => {
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [tokenTotalSupply, setTokenTotalSupply] = useState("");

  useEffect(() => {
    getContractInfo();
  }, []);
  const getContractInfo = async () => {
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
