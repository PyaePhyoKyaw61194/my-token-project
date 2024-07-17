import { useEffect, useState } from "react";
import Header from "../components/Header";
import MyTokenContract from "./../artifacts/contracts/MyToken.sol/MyToken.json";

import { ethers } from "ethers";

const abi = MyTokenContract.abi;

const provider = new ethers.JsonRpcProvider(process.env.HARDHAT_RPC_URL);
const contract = new ethers.Contract(
  "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  abi,
  provider
);
const Home = () => {
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
    <>
      <Header />
      <h1>My App</h1>
      <div>Token Name : {tokenName}</div>
      <div>Token Symbol : {tokenSymbol}</div>
      <div>Total Supply : {tokenTotalSupply}</div>
    </>
  );
};

export default Home;
