import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import React from "react";
import { SWRConfig } from "swr";

import { Layout } from "@src/components/layout";

import "tailwindcss/tailwind.css";
import "@src/design-system/global-style.css";

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
      <SWRConfig
        value={{
          fetcher: async (
            query: string,
            queryName: string,
            variables?: string,
          ) => {
            const bodyObj = variables
              ? { query, variables: JSON.parse(variables) }
              : { query };

            return fetch("/api/graphql", {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({
                ...bodyObj,
              }),
            }).then(async (response) => {
              const unmarshalledResponse = await response.json();
              return unmarshalledResponse.data[queryName];
            });
          },
        }}
      >
        <Layout>
          {children}
          <Script
            src="https://unpkg.com/css-doodle@0.21.6/css-doodle.min.js"
            strategy="beforeInteractive"
          />
        </Layout>
      </SWRConfig>
    </>
  );
};

export default App;
