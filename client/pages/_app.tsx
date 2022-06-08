import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DailyProvider } from "@daily-co/daily-react-hooks";
import DailyIframe from "@daily-co/daily-js";
import { useEffect, useState } from "react";
import { AuthProvider } from "../auth/auth";

function MyApp({ Component, pageProps }: AppProps) {
  const [co, setCo] = useState();
  useEffect(() => {
    setCo(DailyIframe.createCallObject({ url: "gyovDfpFyZnUKWIoeU2r" }));
  }, []);

  if (!co) {
    return null;
  }

  return (
    <AuthProvider>
      <DailyProvider callObject={co}>
        <Component {...pageProps} />
      </DailyProvider>
    </AuthProvider>
  );
}

export default MyApp;
