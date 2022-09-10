import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada com sucesso!</h1>

      <ImageContainer></ImageContainer>

      <p>
        Uhuu! <strong>Jefferson Brandão</strong>, seu produto:{" "}
        <strong>camiseta</strong> já está em preparação para chegar até você
      </p>

      <Link href="/">Voltar a home</Link>
    </SuccessContainer>
  );
}
