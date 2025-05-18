import type { AppProps } from "next/app";
import { ChakraProvider, createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import Head from "next/head";

const globalStyles = /* css */ `
  @font-face {
    font-family: 'Ownglyph_corncorn-Rg';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2412-1@1.0/Ownglyph_corncorn-Rg.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
`;

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: {
          value: ["Ownglyph_corncorn-Rg", "sans-serif"].join(","),
        },
        body: {
          value: ["Ownglyph_corncorn-Rg", "sans-serif"].join(","),
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
