import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter();

  return (
    <div>
      <h1>{JSON.stringify(query)}</h1>
    </div>
  );
}
