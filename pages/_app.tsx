import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ColorContextProvider } from "../context/ColorContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ColorContextProvider>
      <Component {...pageProps} />
    </ColorContextProvider>
  );
}

export default MyApp;
