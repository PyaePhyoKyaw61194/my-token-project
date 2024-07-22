import { useEffect, useState } from "react";
import MyTokenContract from "./../artifacts/contracts/MyToken.sol/MyToken.json";
import { ethers } from "ethers";
const abi = MyTokenContract.abi;

const useContract = () => {
  const [contract, setContract] = useState<ethers.Contract>();

  useEffect(() => {
    const initializeContract = async () => {
      if (typeof (window as any).ethereum !== "undefined") {
        // for Browser wallet
        const provider = new ethers.BrowserProvider((window as any).ethereum);
        const signer = await provider.getSigner();
        const contractInstance = new ethers.Contract(
          process.env.NEXT_PUBLIC_MTK_CONTRACT_ADDRESS || "",
          abi,
          signer
        );

        // For Sepolia
        /*  const provider = new ethers.AlchemyProvider(
          "sepolia",
          process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
        );

        const wallet = new ethers.Wallet(
          process.env.NEXT_PUBLIC_SEPOILA_PRIVATE_KEY || "",
          provider
        );

        const contractInstance = new ethers.Contract(
          process.env.NEXT_PUBLIC_MTK_CONTRACT_ADDRESS || "",
          abi,
          wallet
        ); */

        // for local development
        /*   const provider = new ethers.JsonRpcProvider(
          process.env.NEXT_PUBLIC_HARDHAT_RPC_URL
        );
        const signer = await provider.getSigner();
        const contractInstance = new ethers.Contract(
          process.env.NEXT_PUBLIC_MTK_CONTRACT_ADDRESS || "",
          abi,
          signer
        );*/

        setContract(contractInstance);
      } else {
        console.error("Ethereum object doesn't exist!");
      }
    };
    initializeContract();
  }, []);

  return { contract };
};

export default useContract;
