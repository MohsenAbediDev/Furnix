import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchProducts } from '../store/products/productsSlice'
import { FaStar } from 'react-icons/fa'
import { FaStarHalf } from 'react-icons/fa'
import ProductCard from './ProductCard'
import { Link, useParams } from 'react-router-dom'

export default function ProductState() {
	const dispatch = useDispatch()
	const productId = useParams().id
	const { items, loading, error } = useSelector((state) => state.products)

	const filteredProduct =
		items.filter((product) => product.id === productId)[0] || {}

	useEffect(() => {
		if (items.length === 0) {
			dispatch(fetchProducts())
		}
	}, [dispatch, items.length])

	// Show Skeleton animation
	if (loading) {
		return (
			<div>
				<section className='px-20 my-20 md:my-5 md:px-2'>
					<div className='flex justify-center md:flex-col gap-x-16'>
						<div className='flex gap-x-7 md:flex-col-reverse'>
							<div className='flex flex-col md:flex-row md:justify-between gap-y-5 md:mt-5'>
								<div className='bg-skeleton rounded-md animate-pulse w-20 h-20 flex-center'></div>
								<div className='bg-skeleton rounded-md animate-pulse w-20 h-20 flex-center'></div>
								<div className='bg-skeleton rounded-md animate-pulse w-20 h-20 flex-center'></div>
								<div className='bg-skeleton rounded-md animate-pulse w-20 h-20 flex-center'></div>
							</div>

							<div className='bg-skeleton rounded-lg h-[450px] w-[400px] md:w-full flex-center'>
								<div className='w-full h-full animate-pulse'></div>
							</div>
						</div>

						<div className='w-[500px] md:w-full flex flex-col gap-y-3 md:gap-y-5 md:mt-7'>
							<p className='text-4xl text-black'>
								<span className='block w-1/2 h-8 bg-skeleton animate-pulse'></span>
							</p>
							<p className='text-footerText text-xl'>
								<span className='block w-24 h-6 bg-skeleton animate-pulse'></span>
							</p>

							<div className='flex gap-x-2 items-center'>
								<div className='flex gap-x-1'>
									<div className='w-5 h-5 bg-skeleton animate-pulse'></div>
									<div className='w-5 h-5 bg-skeleton animate-pulse'></div>
									<div className='w-5 h-5 bg-skeleton animate-pulse'></div>
									<div className='w-5 h-5 bg-skeleton animate-pulse'></div>
									<div className='w-5 h-5 bg-skeleton animate-pulse'></div>
								</div>

								<div className='flex-center gap-x-4'>
									<div className='w-[1px] h-7 bg-footerText'></div>
								</div>
							</div>

							<div className='w-[400px] md:w-full text-sm'>
								<p className='h-4 bg-skeleton animate-pulse w-full'></p>
							</div>

							<div className='flex flex-col gap-y-2'>
								<p className='text-footerText text-sm md:text-xl'>Size</p>
								<div className='flex gap-x-3'>
									<div className='w-7 md:w-10 h-7 md:h-10 bg-skeleton animate-pulse rounded-md'></div>
									<div className='w-7 md:w-10 h-7 md:h-10 bg-skeleton animate-pulse rounded-md'></div>
									<div className='w-7 md:w-10 h-7 md:h-10 bg-skeleton animate-pulse rounded-md'></div>
								</div>
							</div>

							<div className='flex flex-col gap-y-2'>
								<p className='text-footerText text-sm md:text-xl'>Color</p>
								<div className='flex gap-x-3'>
									<div className='w-7 md:w-10 h-7 md:h-10 bg-skeleton animate-pulse rounded-full'></div>
									<div className='w-7 md:w-10 h-7 md:h-10 bg-skeleton animate-pulse rounded-full'></div>
									<div className='w-7 md:w-10 h-7 md:h-10 bg-skeleton animate-pulse rounded-full'></div>
								</div>
							</div>

							<div className='flex gap-x-4 my-6'>
								<div className='w-32 md:w-24 h-14 bg-skeleton animate-pulse rounded-lg flex justify-around'></div>

								<div className='w-32 md:w-24 h-14 bg-skeleton animate-pulse rounded-lg flex justify-around'></div>

								<div className='w-32 md:w-24 h-14 bg-skeleton animate-pulse rounded-lg flex justify-around'></div>
							</div>
						</div>
					</div>
				</section>

				<section className='border-t-[1px] border-b-[1px] border-footerText px-40 md:px-2 py-10 flex flex-col gap-y-10'>
					<p className='text-center text-2xl font-semibold'>Description</p>
					<div className='space-y-2'>
						<div className='h-4 bg-skeleton animate-pulse w-full'></div>
						<div className='h-4 bg-skeleton animate-pulse w-full'></div>
						<div className='h-4 bg-skeleton animate-pulse w-full'></div>
					</div>

					<div className='flex-center gap-x-9 md:gap-x-2'>
						<div className='bg-skeleton animate-pulse w-[500px] h-[350px] rounded-lg flex-center'></div>
						<div className='bg-skeleton animate-pulse w-[500px] h-[350px] rounded-lg flex-center'></div>
					</div>
				</section>

				{/* <section className='flex flex-col items-center gap-y-10 py-10'>
					<p className='text-center text-2xl font-semibold '>
						Related Products
					</p>
					<div className='flex-center gap-x-8 md:flex-wrap md:gap-2'>
						<div className='w-60 h-80 bg-skeleton animate-pulse'></div>
						<div className='w-60 h-80 bg-skeleton animate-pulse'></div>
						<div className='w-60 h-80 bg-skeleton animate-pulse'></div>
						<div className='w-60 h-80 bg-skeleton animate-pulse'></div>
					</div>
					<div>
						<Link
							to='/shop'
							className='border-gold border-2 text-base text-gold px-14 py-2 my-7 hover:bg-gold hover:text-white duration-200'>
							Show More
						</Link>
					</div>
				</section> */}
			</div>
		)
	}

	return (
		<div>
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

						<div className='h-[450px] w-[400px] md:w-full flex-center'>
							<img
								src={filteredProduct.image}
								alt={filteredProduct.name}
								className='w-full h-full rounded-lg'
							/>
						</div>
					</div>

					<div className='w-[500px] md:w-full flex flex-col gap-y-3 md:gap-y-5 md:mt-7'>
						<p className='text-4xl text-black'>{filteredProduct.name}</p>
						<p className='text-footerText text-xl'>${filteredProduct.price}</p>

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

						<div className='w-[400px] md:w-full text-sm text-infoStripText'>
							<p>{filteredProduct.description}</p>
						</div>

						<div className='flex flex-col gap-y-2'>
							<p className='text-footerText text-sm md:text-xl'>Size</p>
							<div className='flex gap-x-3'>
								{filteredProduct.sizes?.map((size) => (
									<div
										key={size}
										className='w-7 md:w-10 h-7 md:h-10 bg-primary flex-center rounded-md text-sm md:text-md'>
										{size}
									</div>
								))}
							</div>
						</div>

						<div className='flex flex-col gap-y-2'>
							<p className='text-footerText text-sm md:text-xl'>Color</p>
							<div className='flex gap-x-3'>
								{filteredProduct.colors?.map((color) => (
									<div
										key={color}
										className={`w-7 md:w-10 h-7 md:h-10 bg-${color} border-[1px] border-footerText flex-center rounded-full text-sm`}></div>
								))}
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
					{filteredProduct.description}
					<br /> <br />
					{filteredProduct.description}
					{filteredProduct.description}
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
					{items &&
						items
							.slice(0, 4)
							.map((product) => (
								<ProductCard key={product.id} product={product} />
							))}
				</div>
				<div>
					<Link
						to='/shop'
						className='border-gold border-2 text-base text-gold px-14 py-2 my-7 hover:bg-gold hover:text-white duration-200'>
						Show More
					</Link>
				</div>
			</section>
		</div>
	)
}
