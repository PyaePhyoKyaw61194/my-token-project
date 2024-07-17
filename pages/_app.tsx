import { AppProps } from "next/app";
import { MoralisProvider } from "react-moralis";
import { Toaster } from "react-hot-toast";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <MoralisProvider
        initializeOnMount={false}
        appId="APPLICATION_ID"
        serverUrl="SERVER_URL"
      >
        <Toaster />
        <Component {...pageProps} />
      </MoralisProvider>
    </>
  );
};

export default MyApp;
