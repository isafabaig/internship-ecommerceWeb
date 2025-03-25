import Image from "next/image";
import Hero from "./hero/page";
import Deals from "./components/deals";
import Categories from "./components/categories";
import Quote from "./components/quote";
import Recommendeditems from "./components/recommendeditems";
import Suppliers from "./components/suppliers";
import Extraservices from "./components/extraservices";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Deals/>
      <Categories/>
      <Quote/>
      <Recommendeditems/>
      <Extraservices/>
      <Suppliers/>
    </div>
  );
}
