import MyTokenContract from "./../artifacts/contracts/MyToken.sol/MyToken.json";
import { ethers } from "ethers";

const abi = MyTokenContract.abi;

const provider = new ethers.JsonRpcProvider(
  process.env.NEXT_PUBLIC_HARDHAT_RPC_URL
);
const contract = new ethers.Contract(
  process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "",
  abi,
  provider
);

export default contract;
