import MyTokenContract from "./../artifacts/contracts/MyToken.sol/MyToken.json";
import { ethers } from "ethers";

const abi = MyTokenContract.abi;

const provider = new ethers.JsonRpcProvider(process.env.HARDHAT_RPC_URL);
const contract = new ethers.Contract(
  "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  abi,
  provider
);

export default contract;
