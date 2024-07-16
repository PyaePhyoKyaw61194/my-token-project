import { AppProps } from "next/app";
import { MoralisProvider } from "react-moralis";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <MoralisProvider
        initializeOnMount={false}
        appId="APPLICATION_ID"
        serverUrl="SERVER_URL"
      >
        <Component {...pageProps} />
      </MoralisProvider>
    </>
  );
};

export default MyApp;
