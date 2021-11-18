import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

import "tailwindcss/tailwind.css";
import "@src/design-system/global-style.css";
import { Layout } from "@src/components/layout";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SpaceCenterApp>
      <Component {...pageProps} />
    </SpaceCenterApp>
  );
};

const SpaceCenterApp: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>SpaceX Space Center</title>
        <meta name="description" content="SpaceX Space Center" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>{children}</Layout>
    </>
  );
};

export default App;
