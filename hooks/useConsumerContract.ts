import { useEffect, useState } from "react";
import ConsumerContract from "./../artifacts/contracts/PriceConsumer.sol/PriceConsumer.json";
import { ethers } from "ethers";
const abi = ConsumerContract.abi;

const useConsumerContract = () => {
  const [contract, setContract] = useState<ethers.Contract>();

  useEffect(() => {
    const initializeContract = async () => {
      if (typeof (window as any).ethereum !== "undefined") {
        // for Browser wallet
        const provider = new ethers.BrowserProvider((window as any).ethereum);
        const signer = await provider.getSigner();
        const contractInstance = new ethers.Contract(
          process.env.NEXT_PUBLIC_CONSUMER_CONTRACT_ADDRESS || "",
          abi,
          signer
        );
        setContract(contractInstance);
      } else {
        console.error("Ethereum object doesn't exist!");
      }
    };
    initializeContract();
  }, []);

  return { contract };
};

export default useConsumerContract;
