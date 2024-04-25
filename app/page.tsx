import Landing from "./_components/landing/Landing";
import Products from "./_components/products/Products";
import Values from "./_components/values/Values";
import Who from "./_components/who/Who";

export default function Home() {
  return (
    <>
      <Landing />
      <Values />
      <Who />
      <Products />
    </>
  );
}
