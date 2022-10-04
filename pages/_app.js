import React from "react";

import { Layout } from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

console.log(a);

export default MyApp;
