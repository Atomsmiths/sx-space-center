import type { AppProps } from "next/app";
import React from "react";

import "@src/design-system/global-style.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
