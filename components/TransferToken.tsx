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
    <div>
      <h1>Transfer MYT</h1>
      <input
        type="text"
        placeholder="Wallet Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount of Token"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <button disabled={loading} onClick={handleTransfer}>
        {loading ? "Transferring..." : "Transfer"}
      </button>
    </div>
  );
};

export default TransferToken;
