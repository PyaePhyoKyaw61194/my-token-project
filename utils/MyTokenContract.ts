import MyTokenContract from "./../artifacts/contracts/MyToken.sol/MyToken.json";
import { ethers } from "ethers";

const abi = MyTokenContract.abi;

const provider = new ethers.JsonRpcProvider(
  process.env.NEXT_PUBLIC_HARDHAT_RPC_URL
);
export const signer = provider.getSigner();
export const contract = new ethers.Contract(
  process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "",
  abi,
  provider
);
