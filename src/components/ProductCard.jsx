import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoShareSocialOutline, IoHeartOutline } from 'react-icons/io5'
import { MdOutlineCompareArrows } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart as addToCartReducer } from '../store/cart/cartSlice'

function ProductCard({ product }) {
	const dispatch = useDispatch()
	const { items, loading, error } = useSelector((state) => state.cart)

	const addToCart = (e) => {
		e.preventDefault()
		const newProduct = { ...product, quantity: 1 }

		dispatch(addToCartReducer(newProduct))
	}

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(items))
	}, [items])

	return (
		<Link
			to={`/product/${product.id}`}
			className='w-[245px] sm:w-[190px] h-[383px] sm:h-[350px] bg-card relative overflow-hidden'>
			<img
				src={product.image}
				alt={`${product.name} ${product.category}`}
				className='w-full'
			/>

			<div className='w-full p-4 flex flex-col gap-y-2'>
				<p className='font-semibold text-xl'>{product.name}</p>
				<p className='text-gray text-sm'>{product.category}</p>
				<p className='font-semibold text-lg'>${product.price}</p>
			</div>

			<div className='absolute w-full h-full bg-[#666666bf] z-10 top-0 flex-center opacity-0 hover:opacity-100 duration-200'>
				<div className='w-full flex flex-col items-center'>
					<button
						onClick={(e) => addToCart(e)}
						className='bg-white w-[170px] h-[43px] text-gold'>
						Add to cart
					</button>

					<div className='flex-center-between text-sm w-11/12 sm:w-full sm:hidden text-white font-bold mt-6'>
						<span className='flex-center gap-x-1 sm:text-xs'>
							<IoShareSocialOutline className='text-xl sm:text-sm' /> Share
						</span>
						<span className='flex-center gap-x-1 sm:text-xs'>
							<MdOutlineCompareArrows className='text-xl sm:text-sm' /> Compare
						</span>
						<span className='flex-center gap-x-1 sm:text-xs'>
							<IoHeartOutline className='text-xl sm:text-sm' />
							Like
						</span>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default ProductCard
