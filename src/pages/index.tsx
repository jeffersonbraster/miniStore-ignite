import Image from "next/future/image";
import { HomeContainer, Product } from "../styles/pages/home";
import camiseta1 from "../assets/1.png";
import camiseta2 from "../assets/2.png";
import camiseta3 from "../assets/1.png";

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image
          src={camiseta1}
          width={520}
          height={480}
          alt="camiseta rocket 1"
        />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 80,00</span>
        </footer>
      </Product>

      <Product>
        <Image
          src={camiseta2}
          width={520}
          height={480}
          alt="camiseta rocket 2"
        />

        <footer>
          <strong>Camiseta Y</strong>
          <span>R$ 100,00</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
