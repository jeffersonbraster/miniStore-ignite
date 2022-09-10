import { useRouter } from "next/router";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 200,00</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At nihil,
          blanditiis veniam sunt eum maxime numquam. Atque earum corrupti
          molestias esse ad eius sequi necessitatibus rem eos, autem labore
          dicta.
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
