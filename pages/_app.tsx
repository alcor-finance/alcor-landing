import "../styles/globals.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    global.document.documentElement.classList.remove("dark");
  }, []);

  return <Component {...pageProps} />;
}
