import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { ConnectButton } from "web3uikit";
import { ethers } from "ethers";
import useContract from "../hooks/useContract";

const Header = () => {
  const { account, isWeb3Enabled } = useMoralis();
  const [userBalance, setUserBalance] = useState<number>(0);
  const { contract } = useContract();
  useEffect(() => {
    if (isWeb3Enabled) {
      const getUserBalance = async () => {
        if (!contract || !account) return;
        /*         const userAddress = (await signer).getAddress();*/
        const balance = await contract.balanceOf(account);
        const formattedBalance = ethers.formatUnits(balance, 18);
        setUserBalance(parseFloat(formattedBalance));
      };
      getUserBalance();
    }
  }, [isWeb3Enabled, account, contract]);
  return (
    <div>
      <ConnectButton />
      <p>{userBalance} MYT</p>
    </div>
  );
};
export default Header;
