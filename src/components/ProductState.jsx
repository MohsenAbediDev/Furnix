import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchProducts } from '../store/products/productsSlice'
import { FaStar } from 'react-icons/fa'
import { FaStarHalf } from 'react-icons/fa'
import ProductCard from './ProductCard'
import { Link, useParams } from 'react-router-dom'
import { addToCart as addToCartReducer } from '../store/cart/cartSlice'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { isGithubPages } from '../utils/utils'

export default function ProductState() {
	// Initialize the Redux dispatch function
	const dispatch = useDispatch()

	// Get the product ID from the URL parameters
	const productId = useParams().id

	// Extract product-related state from the Redux store
	const { items, loading, error } = useSelector((state) => state.products)

	// Retrieve cart items from localStorage
	const cartItems = useSelector((state) => state.cart.items)
	const isInCart = cartItems?.some((item) => item.id == productId)

	// Get the quantity of the product if it's already in the cart
	const cartProduct = cartItems?.find((item) => item.id === productId)
	const [quantity, setQuantity] = useState(
		cartProduct ? cartProduct.quantity : 1
	)

	// Find the selected product from the list of fetched products
	const filteredProduct =
		items.filter((product) => product.id === productId)[0] || {}

	// Image States
	const [mainImage, setMainImage] = useState(filteredProduct?.image)
	const [animateImage, setAnimateImage] = useState(false)

	const handleImageClick = (imgSrc) => {
		setAnimateImage(true)
		setMainImage(imgSrc)

		setTimeout(() => setAnimateImage(false), 300) // Reset animation
	}

	// Function to add the product to the cart
	const addToCart = () => {
		if (isInCart) return
		const newProduct = { ...filteredProduct, quantity: quantity }
		dispatch(addToCartReducer(newProduct))

		Swal.fire({
			toast: true,
			position: 'top-end',
			icon: 'success',
			title: `${filteredProduct.name} added to cart`,
			showConfirmButton: false,
			timer: 1500,
			timerProgressBar: true,
			customClass: {
				popup: 'mt-10',
			},
		})
	}

	// Fetch products when the component mounts if the product list is empty
	useEffect(() => {
		if (items.length === 0) {
			dispatch(fetchProducts())
		}
	}, [dispatch, items.length])

	// Update the cart in Redux when the quantity changes
	useEffect(() => {
		if (cartProduct && filteredProduct?.id) {
			dispatch(addToCartReducer({ ...filteredProduct, quantity }))
		}
	}, [quantity, cartProduct?.quantity, filteredProduct?.id])

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
			</div>
		)
	}

	return (
		<div>
			<section className='px-20 my-20 md:my-5 md:px-2'>
				<div className='flex justify-center md:flex-col gap-x-16'>
					<div className='flex gap-x-7 md:flex-col-reverse'>
						<div className='flex flex-col md:flex-row md:justify-between gap-y-5 md:mt-5'>
							{Array(4)
								.fill()
								.map((_, index) => (
									<div
										key={index}
										className='bg-primary rounded-md w-20 sm:w-24 h-20 flex-center'>
										<img
											src={
												isGithubPages()
													? `/Furnix/${filteredProduct.image}`
													: filteredProduct.image
											}
											alt={filteredProduct.name}
											onClick={() => handleImageClick(filteredProduct.image)}
											className='w-full rounded-md cursor-pointer brightness-75'
										/>
									</div>
								))}
						</div>

						<div className='h-[450px] w-[400px] md:w-full flex-center'>
							<img
								src={isGithubPages() ? `/Furnix/${mainImage}` : mainImage}
								alt={filteredProduct.name}
								className={`w-full h-full rounded-lg transition-all duration-300 ease-in-out ${
									animateImage ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
								}`}
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
								<button
									className='w-1/3 flex-center'
									onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>
									-
								</button>

								<div className='w-1/3 flex-center text-xl'>{quantity}</div>

								<button
									className='w-1/3 flex-center'
									onClick={() => setQuantity((prev) => prev + 1)}>
									+
								</button>
							</div>

							<button
								className='w-44 md:w-32 h-14 border-[1px] border-black rounded-lg flex justify-around text-xl flex-center'
								onClick={addToCart}
								disabled={isInCart}>
								{isInCart ? 'Added' : 'Add To Cart'}
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

				<div className='flex-center sm:flex-col gap-x-9 md:gap-x-2 sm:gap-y-5'>
					<img
						src={
							isGithubPages()
								? `/Furnix/${filteredProduct.image}`
								: filteredProduct.image
						}
						alt={filteredProduct.name}
						className='max-w-96 rounded-md brightness-75'
					/>
					<img
						src={
							isGithubPages()
								? `/Furnix/${filteredProduct.image}`
								: filteredProduct.image
						}
						alt={filteredProduct.name}
						className='max-w-96 rounded-md brightness-75'
					/>
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
