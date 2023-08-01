import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ColorContextProvider } from "../context/ColorContext";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ColorContextProvider>
      <Component {...pageProps} />
      <Analytics />
    </ColorContextProvider>
  );
}

export default MyApp;
