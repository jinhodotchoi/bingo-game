import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Noto_Sans_KR } from "@next/font/google";

const notoSansKR = Noto_Sans_KR({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <main className={notoSansKR.className}>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
}
