import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Container, Header } from "../styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <span>Jeje - Shop</span>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
