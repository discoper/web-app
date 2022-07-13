import React, { useEffect } from "react";
import "../styles/globals.scss";
import "../public/particles/css/style.css";
import { NavbarWrapper } from "../components/NavbarWrapper";
import "../public/particles/css/particles.css";
import { AuthProvider } from "../components/authContext";
import { BlockchainContext } from "../components/BlockchainContex";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const app = () => {
      const script = document.createElement("script");
      script.src = "/particles/js/particles.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    };
    return app();
  }, []);
  return (
    <>
      <Head>
        <title>DISCOPER</title>
        <meta name="description" content="NFT Social Club" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </Head>
      <BlockchainContext>
        <AuthProvider>
          <NavbarWrapper>
            <Component {...pageProps} />
          </NavbarWrapper>
        </AuthProvider>
      </BlockchainContext>
    </>
  );
}

export default MyApp;
