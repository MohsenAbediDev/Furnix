import ProductCard from "./ProductCard"

export default function OurProduct() {
  return <>
    <section className="flex justify-center">
      <div className="w-10/12 flex flex-col items-center">
        <p className="my-12 text-3xl font-semibold">Our Product</p>
        <div className="grid grid-cols-4 gap-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <button className="border-gold border-2 text-base text-gold px-14 py-2 my-7 hover:bg-gold hover:text-white duration-200">
          Show More
        </button>
      </div>
    </section>
  </>
}