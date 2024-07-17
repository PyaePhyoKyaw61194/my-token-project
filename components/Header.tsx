import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { ConnectButton } from "web3uikit";
import { contract } from "../utils/MyTokenContract";
import { ethers } from "ethers";

const Header = () => {
  const { account, isWeb3Enabled } = useMoralis();
  const [userBalance, setUserBalance] = useState<number>(0);
  useEffect(() => {
    if (isWeb3Enabled) {
      const getUserBalance = async () => {
        /*         const userAddress = (await signer).getAddress();*/
        const balance = await contract.balanceOf(account);
        const formattedBalance = ethers.formatUnits(balance, 18);
        setUserBalance(parseFloat(formattedBalance));
      };
      getUserBalance();
    }
  }, [isWeb3Enabled, account]);
  return (
    <div>
      <ConnectButton />
      <p>{userBalance} MYT</p>
    </div>
  );
};
export default Header;
