import type { AppProps } from "next/app";
import { DailyProvider } from "@daily-co/daily-react-hooks";
import DailyIframe from "@daily-co/daily-js";
import { useEffect, useState } from "react";
import { AuthProvider } from "../auth/auth";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "../theme";
import "../style/videotooltip.scss";
import "../style/global.scss";
import PanicButton from "../components/PanicButton";
import { QuizProvider } from "../context/QuizContext";

function MyApp({ Component, pageProps }: AppProps) {
    const [co, setCo] = useState();
    useEffect(() => {
        //@ts-ignore
        setCo(DailyIframe.createCallObject({ url: "gyovDfpFyZnUKWIoeU2r" }));
    }, []);

    if (!co) {
        return null;
    }

    // ChakraProvider lets us use theme functionality throughout the context tree
    // TODO: Explain other provider wrappers
    return (
        <ChakraProvider theme={theme}>
            <AuthProvider>
                <DailyProvider callObject={co}>
                    <QuizProvider>
                        <Component {...pageProps} />
                    </QuizProvider>
                </DailyProvider>
            </AuthProvider>
        </ChakraProvider>
    );
}

export default MyApp;
