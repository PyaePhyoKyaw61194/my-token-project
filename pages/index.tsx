import BalanceCheck from "../components/BalanceCheck";
import Consumer from "../components/Consumer";
import Header from "../components/Header";
import TokenInfo from "../components/TokenInfo";
import TransferToken from "../components/TransferToken";

const Home = () => {
  return (
    <div className="container">
      <div className="m-5">
        <Header />
        <Consumer />
      </div>

      <div className="text-center bg-light p-5 m-5">
        <h1>My Token dApp</h1>
      </div>

      <TokenInfo />
      <TransferToken />
      <BalanceCheck />
    </div>
  );
};

export default Home;
