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
    <div className="container">
      <div className="m-5">
        <p className="alert alert-light">Token name: {tokenName}</p>
        <p className="alert alert-light">Token symbol: {tokenSymbol}</p>
        <p className="alert alert-light">
          Token total supply: {tokenTotalSupply}
        </p>
      </div>
    </div>
  );
};

export default TokenInfo;
