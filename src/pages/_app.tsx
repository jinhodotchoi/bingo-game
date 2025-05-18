import type { AppProps } from "next/app";
import { ChakraProvider, createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import Head from "next/head";

const globalStyles = /* css */ `
    @font-face {
        font-family: 'TheJamsil5Bold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2') format('woff2');
        font-weight: 700;
        font-style: normal;
    }
`;

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: {
          value: ["TheJamsil5Bold", "sans-serif"].join(","),
        },
        body: {
          value: ["TheJamsil5Bold", "sans-serif"].join(","),
        },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>영양소 빙고게임</title>
        <meta name="viewport" content="width=950, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <ChakraProvider value={system}>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
