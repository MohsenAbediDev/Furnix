import Header from "../components/Header"
import Range from "../components/Range"
import OurProduct from "../components/OurProduct"
import FuniroFurniture from "../components/FuniroFurniture"

export default function Home() {
  return <>
    <div className="w-full">
      <Header />
      <Range />
      <OurProduct />
      <FuniroFurniture/>
    </div>
  </>
}