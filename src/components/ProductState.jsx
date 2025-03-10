import { FaStar } from 'react-icons/fa'
import { FaStarHalf } from 'react-icons/fa'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'

export default function ProductState() {
	return (
		<>
			<section className='px-20 my-20 md:my-5 md:px-2'>
				<div className='flex justify-center md:flex-col gap-x-16'>
					<div className='flex gap-x-7 md:flex-col-reverse'>
						<div className='flex flex-col md:flex-row md:justify-between gap-y-5 md:mt-5'>
							<div className='bg-primary rounded-md w-20 h-20 flex-center'>
								<img
									src='/images/Stuart sofa 1.png'
									alt=''
									className='w-full'
								/>
							</div>
							<div className='bg-primary rounded-md w-20 h-20 flex-center'>
								<img
									src='/images/Maya sofa three seater (1) 1.png'
									alt=''
									className='w-full'
								/>
							</div>
							<div className='bg-primary rounded-md w-20 h-20 flex-center'>
								<img
									src='/images/Outdoor sofa set 2.png'
									alt=''
									className='w-full'
								/>
							</div>
							<div className='bg-primary rounded-md w-20 h-20 flex-center'>
								<img
									src='/images/Outdoor sofa set_2 1.png'
									alt=''
									className='w-full'
								/>
							</div>
						</div>

						<div className='bg-primary rounded-lg h-[450px] w-[400px] md:w-full flex-center'>
							<img src='/images/Asgaard sofa 3.png' alt='' className='w-full' />
						</div>
					</div>

					<div className='w-[500px] md:w-full flex flex-col gap-y-3 md:gap-y-5 md:mt-7'>
						<p className='text-4xl text-black'>Asgard Sofa</p>
						<p className='text-footerText text-xl'>$ 250,000</p>

						<div className='flex gap-x-2 items-center'>
							<div className='flex text-star gap-x-1'>
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStarHalf />
							</div>

							<div className='flex-center gap-x-4'>
								<div className='w-[1px] h-7 bg-footerText'></div>
								<p className='text-footerText'>5 Customer Review</p>
							</div>
						</div>

						<div className='w-[400px] md:w-full text-sm'>
							<p>
								Setting the bar as one of the loudest speakers in its class, the
								Kilburn is a compact, stout-hearted hero with a well-balanced
								audio which boasts a clear midrange and extended highs for a
								sound.
							</p>
						</div>

						<div className='flex flex-col gap-y-2'>
							<p className='text-footerText text-sm md:text-xl'>Size</p>
							<div className='flex gap-x-3'>
								<div className='w-7 md:w-10 h-7 md:h-10 bg-gold text-white flex-center rounded-md text-sm md:text-md'>
									L
								</div>
								<div className='w-7 md:w-10 h-7 md:h-10 bg-primary flex-center rounded-md text-sm md:text-md'>
									XL
								</div>
								<div className='w-7 md:w-10 h-7 md:h-10 bg-primary flex-center rounded-md text-sm md:text-md'>
									XS
								</div>
							</div>
						</div>

						<div className='flex flex-col gap-y-2'>
							<p className='text-footerText text-sm md:text-xl'>Color</p>
							<div className='flex gap-x-3'>
								<div className='w-7 md:w-10 h-7 md:h-10 bg-purple flex-center rounded-full text-sm'></div>
								<div className='w-7 md:w-10 h-7 md:h-10 bg-black flex-center rounded-full text-sm'></div>
								<div className='w-7 md:w-10 h-7 md:h-10 bg-gold flex-center rounded-full text-sm'></div>
							</div>
						</div>

						<div className='flex gap-x-4 my-6'>
							<div className='w-32 md:w-24 h-14 border-[1px] border-footerText rounded-lg flex justify-around'>
								<button className='w-1/3 flex-center'>-</button>
								<div className='w-1/3 flex-center text-xl'>1</div>
								<button className='w-1/3 flex-center'>+</button>
							</div>

							<button className='w-44 md:w-32 h-14 border-[1px] border-black rounded-lg flex justify-around text-xl flex-center'>
								Add To Cart
							</button>

							<button className='w-44 md:w-32 h-14 border-[1px] border-black rounded-lg flex justify-around text-xl flex-center'>
								+ Compare
							</button>
						</div>
					</div>
				</div>
			</section>

			<section className='border-t-[1px] border-b-[1px] border-footerText px-40 md:px-2 py-10 flex flex-col gap-y-10'>
				<p className='text-center text-2xl font-semibold'>Description</p>
				<p className='text-footerText text-justify hyphens-auto'>
					Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
					portable active stereo speaker takes the unmistakable look and sound
					of Marshall, unplugs the chords, and takes the show on the road.
					<br /> <br />
					Weighing in under 7 pounds, the Kilburn is a lightweight piece of
					vintage styled engineering. Setting the bar as one of the loudest
					speakers in its class, the Kilburn is a compact, stout-hearted hero
					with a well-balanced audio which boasts a clear midrange and extended
					highs for a sound that is both articulate and pronounced. The analogue
					knobs allow you to fine tune the controls to your personal preferences
					while the guitar-influenced leather strap enables easy and stylish
					travel.
				</p>

				<div className='flex-center gap-x-9 md:gap-x-2'>
					<div className='bg-primary w-[500px] h-[350px] rounded-lg flex-center'>
						<img
							src='/images/Cloud sofa three seater + ottoman_1 1.png'
							alt=''
							className='w-full'
						/>
					</div>
					<div className='bg-primary w-[500px] h-[350px] rounded-lg flex-center'>
						<img
							src='/images/Cloud sofa three seater + ottoman_1 1.png'
							alt=''
							className='w-full'
						/>
					</div>
				</div>
			</section>

			<section className='flex flex-col items-center gap-y-10 py-10'>
				<p className='text-center text-2xl font-semibold '>Related Products</p>
				<div className='flex-center gap-x-8 md:flex-wrap md:gap-2'>
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
	)
}
