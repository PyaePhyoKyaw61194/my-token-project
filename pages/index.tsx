import Header from "../components/Header";
import TokenInfo from "../components/TokenInfo";
import TransferToken from "../components/TransferToken";

const Home = () => {
  return (
    <>
      <Header />
      <h1>My App</h1>
      <TokenInfo />
      <TransferToken />
    </>
  );
};

export default Home;
