import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

export default function ProductState() {
  return <>
    <section className="px-20 my-20">
      <div className="flex justify-center gap-x-16">
        <div className="flex gap-x-7">
          <div className="flex flex-col gap-y-5">

            <div className="bg-primary rounded-md w-20 h-20 flex-center">
              <img src="/images/Stuart sofa 1.png" alt="" className="w-full" />
            </div>
            <div className="bg-primary rounded-md w-20 h-20 flex-center">
              <img src="/images/Maya sofa three seater (1) 1.png" alt="" className="w-full" />
            </div>
            <div className="bg-primary rounded-md w-20 h-20 flex-center">
              <img src="/images/Outdoor sofa set 2.png" alt="" className="w-full" />
            </div>
            <div className="bg-primary rounded-md w-20 h-20 flex-center">
              <img src="/images/Outdoor sofa set_2 1.png" alt="" className="w-full" />
            </div>

          </div>

          <div className="bg-primary rounded-lg h-[450px] w-[400px] flex-center">
            <img src="/images/Asgaard sofa 3.png" alt="" className="w-full" />
          </div>
        </div>

        <div className="w-[500px] flex flex-col gap-y-3">
          <p className="text-4xl text-black">Asgard Sofa</p>
          <p className="text-footerText text-xl">$ 250,000</p>

          <div className="flex gap-x-2 items-center">
            <div className="flex text-star gap-x-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>

            <div className="flex-center gap-x-4">
              <div className="w-[1px] h-7 bg-footerText"></div>
              <p className="text-footerText">5 Customer Review</p>
            </div>

          </div>

          <div className="w-[400px] text-sm">
            <p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
            </p>
          </div>

          <div className="flex flex-col gap-y-2">
            <p className="text-footerText text-sm">Size</p>
            <div className="flex gap-x-3">
              <div className="w-7 h-7 bg-gold text-white flex-center rounded-md text-sm">L</div>
              <div className="w-7 h-7 bg-primary flex-center rounded-md text-sm">XL</div>
              <div className="w-7 h-7 bg-primary flex-center rounded-md text-sm">XS</div>
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <p className="text-footerText text-sm">Color</p>
            <div className="flex gap-x-3">
              <div className="w-7 h-7 bg-purple flex-center rounded-full text-sm"></div>
              <div className="w-7 h-7 bg-black flex-center rounded-full text-sm"></div>
              <div className="w-7 h-7 bg-gold flex-center rounded-full text-sm"></div>
            </div>
          </div>

          <div className="flex gap-x-4 my-6">
            <div className="w-[128px] h-[55px] border-[1px] border-footerText rounded-lg flex justify-around">
              <div className="w-1/3 flex-center">-</div>
              <div className="w-1/3 flex-center">1</div>
              <div className="w-1/3 flex-center">+</div>
            </div>
            <div className="w-[177px] h-[55px] border-[1px] border-black rounded-lg flex justify-around text-xl flex-center">
              Add To Cart
            </div>
            <div className="w-[177px] h-[55px] border-[1px] border-black rounded-lg flex justify-around text-xl flex-center">
              + Compare
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="border-t-[1px] border-b-[1px] border-footerText px-40 py-10 flex flex-col gap-y-10">
      <p className="text-center text-2xl font-semibold">Description</p>
      <p className="text-footerText">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. <br /> <br />
        Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
      <div className="flex-center gap-x-9">
        <div className="bg-primary w-[500px] h-[350px] rounded-lg flex-center">
          <img src="/images/Cloud sofa three seater + ottoman_1 1.png" alt="" className="w-full" />
        </div>
        <div className="bg-primary w-[500px] h-[350px] rounded-lg flex-center">
          <img src="/images/Cloud sofa three seater + ottoman_1 1.png" alt="" className="w-full" />
        </div>
      </div>
    </section>

    <section className="flex flex-col items-center gap-y-10 py-10">
      <p className="text-center text-2xl font-semibold ">Related Products</p>
      <div className="flex-center gap-x-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div>
        <Link
          to='/shop'
          className='border-gold border-2 text-base text-gold px-14 py-2 my-7 hover:bg-gold hover:text-white duration-200'>
          Show More
        </Link>
      </div>
    </section>
  </>
}