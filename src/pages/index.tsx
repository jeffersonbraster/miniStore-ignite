import Image from "next/future/image";
import { useKeenSlider } from "keen-slider/react";
import { HomeContainer, Product } from "../styles/pages/home";
import "keen-slider/keen-slider.min.css";
import camiseta1 from "../assets/1.png";
import camiseta2 from "../assets/2.png";
import camiseta3 from "../assets/3.png";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
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

      <Product className="keen-slider__slide">
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

      <Product className="keen-slider__slide">
        <Image
          src={camiseta3}
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
