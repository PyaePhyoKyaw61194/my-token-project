import { AppProps } from "next/app";
import { MoralisProvider } from "react-moralis";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossOrigin="anonymous"
        />
      </Head>
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
