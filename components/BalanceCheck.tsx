import { useState } from "react";
import { ethers } from "ethers";
import MyTokenContract from "./../artifacts/contracts/MyToken.sol/MyToken.json";
import useContract from "../hooks/useContract";
const abi = MyTokenContract.abi;

const BalanceCheck = () => {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(0);
  const { contract } = useContract();
  const [loading, setLoading] = useState(false);

  const handleBalanceCheck = async () => {
    try {
      setLoading(true);
      if (!contract) return;
      const balance = await contract.balanceOf(address);
      const formattedBalance = ethers.formatEther(balance);
      setBalance(parseFloat(formattedBalance));
      setLoading(false);
    } catch (e: any) {
      console.log(e.message);
      setLoading(false);
    }
  };
  return (
    <div className="text-center bg-light p-5 m-5">
      <h1>MYT Balance Check</h1>

      {balance >= 0 ? <h1 className="mb-5 text-primary">{balance} MYT</h1> : ""}

      <input
        type="text"
        className="form-control p-3 m-3"
        placeholder="Wallet address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />

      <button
        onClick={handleBalanceCheck}
        className="btn col-3 btn-secondary p-3 m-3"
        disabled={loading || !address}
      >
        {loading ? "Loading" : "Submit"}
      </button>
    </div>
  );
};

export default BalanceCheck;
