import { useState } from "react";
import { ethers } from "ethers";
import MyTokenContract from "./../artifacts/contracts/MyToken.sol/MyToken.json";
import useContract from "../hooks/useContract";
import toast from "react-hot-toast";
const abi = MyTokenContract.abi;

const TransferToken = () => {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState(0);
  const { contract } = useContract();
  const [loading, setLoading] = useState(false);

  const handleTransfer = async () => {
    try {
      setLoading(true);
      if (!contract) return;
      const decimals = await contract.decimals();
      const formattedAmount = ethers.parseUnits(amount.toString(), decimals);

      const tx = await contract.transfer(address, formattedAmount);
      await tx.wait();
      toast.success("Token transferred successfully");
      setLoading(false);
      setAddress("");
      setAmount(0);
      window.location.reload();
    } catch (e: any) {
      toast.error("Error transferring token" + e.message);
      setLoading(false);
    }
  };
  return (
    <div className="text-center bg-light p-5 m-5">
      <h1>Transfer MYT</h1>

      <input
        type="text"
        className="form-control p-3 m-3"
        placeholder="Wallet address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />

      <input
        type="number"
        className="form-control p-3 m-3"
        placeholder="Amount of token"
        value={amount}
        onChange={(event) => setAmount(Number(event.target.value))}
      />

      <button
        onClick={handleTransfer}
        className="btn col-3 btn-secondary p-3 m-3"
        disabled={loading}
      >
        {loading ? "Loading" : "Transfer"}
      </button>
    </div>
  );
};

export default TransferToken;
