import Footer from "./_components/home/footer/Footer";
import Landing from "./_components/home/landing/Landing";
import Products from "./_components/home/products/Products";
import Values from "./_components/home/values/Values";
import Who from "./_components/home/who/Who";

export default function Home() {
  return (
    <>
      <Landing />
      <div className="max-w-5xl flex flex-col items-center">
        <Values />
        <Who />
        <Products />
      </div>
      <Footer />
    </>
  );
}
