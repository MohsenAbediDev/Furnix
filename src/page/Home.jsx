import Header from "../components/Header"
import Range from "../components/Range"
import Products from "../components/Products"
import FuniroFurniture from "../components/FuniroFurniture"

export default function Home() {
  return <>
    <div className="w-full">
      <Header />
      <Range />
      <Products />
      <FuniroFurniture/>
    </div>
  </>
}