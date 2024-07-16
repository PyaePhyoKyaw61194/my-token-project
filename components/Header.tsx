import { useMoralis } from "react-moralis";

const Header = () => {
  const { enableWeb3, account } = useMoralis();
  return (
    <div>
      {account ? (
        <div>
          Connected to: {account.slice(0, 6)}...{account.slice(-4)}
        </div>
      ) : (
        <button onClick={async () => await enableWeb3()}>Connect Wallet</button>
      )}
    </div>
  );
};
export default Header;
