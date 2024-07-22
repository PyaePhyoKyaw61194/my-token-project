import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { ConnectButton } from "web3uikit";
import { ethers } from "ethers";
import useConsumerContract from "../hooks/useConsumerContract";

const Consumer = () => {
  const { isWeb3Enabled } = useMoralis();
  const [usdPrice, setUsdPrice] = useState<number>(0);
  const { contract } = useConsumerContract();
  useEffect(() => {
    if (isWeb3Enabled) {
      const getUserBalance = async () => {
        if (!contract) return;
        const price = await contract.getLatestPrice();
        setUsdPrice(parseInt(price) / 1e8);
      };
      getUserBalance();
    }
  }, [isWeb3Enabled, contract]);
  return (
    <div>
      <div className="d-flex justify-content-between">
        <div></div>
        <p>
          <span className="badge bg-danger">{usdPrice} ETH/USD</span>
        </p>
      </div>
    </div>
  );
};
export default Consumer;
