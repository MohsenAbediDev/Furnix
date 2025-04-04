import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoShareSocialOutline, IoHeartOutline, IoHeart } from 'react-icons/io5'
import { MdOutlineCompareArrows } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart as addToCartReducer } from '../store/cart/cartSlice'
import { toggleFavorite } from '../store/favorite/favoriteSlice'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

function ProductCard({ product }) {
	const dispatch = useDispatch()
	const { items } = useSelector((state) => state.cart)
	const favorites = useSelector((state) => state.favorite.favorites)

	// Check products
	const isLiked = favorites.some((item) => item.id === product.id)
	const isInCart = items.some((item) => item.id === product.id)

	const addToCart = (e) => {
		e.preventDefault()
		if (isInCart) return
		const newProduct = { ...product, quantity: 1 }
		dispatch(addToCartReducer(newProduct))

		Swal.fire({
			toast: true,
			position: 'top-end',
			icon: 'success',
			title: `${product.name} added to cart`,
			showConfirmButton: false,
			timer: 1500,
			timerProgressBar: true,
			customClass: {
				popup: 'mt-10',
			},
		})
	}

	// Like product and set on localStorage
	const likeProduct = (e) => {
		e.preventDefault()
		dispatch(toggleFavorite(product))
	}

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(items))
	}, [items])

	return (
		<Link
			to={`/product/${product.id}`}
			className='w-[220px] sm:w-[170px] h-[345px] sm:h-[315px] bg-card relative overflow-hidden'>
			<img
				src={product.image}
				alt={`${product.name} ${product.category}`}
				className='w-full'
			/>

			<div className='w-full p-4 flex flex-col gap-y-2'>
				<p className='font-semibold text-lg'>{product.name}</p>
				<p className='text-gray text-sm'>{product.category}</p>
				<p className='font-semibold text-base'>${product.price}</p>
			</div>

			<div className='absolute w-full h-full bg-[#666666bf] z-10 top-0 flex-center opacity-0 hover:opacity-100 duration-200'>
				<div className='w-full flex flex-col items-center'>
					<button
						onClick={(e) => addToCart(e)}
						className='bg-white w-[153px] h-[39px] text-gold disabled:opacity-50'
						disabled={isInCart}>
						{isInCart ? 'In Cart' : 'Add to cart'}
					</button>

					<div className='flex-center-between text-sm w-11/12 sm:w-full sm:hidden text-white font-bold mt-5'>
						<span className='flex-center gap-x-1 sm:text-xs'>
							<IoShareSocialOutline className='text-lg sm:text-xs' /> Share
						</span>

						<span className='flex-center gap-x-1 sm:text-xs'>
							<MdOutlineCompareArrows className='text-lg sm:text-xs' /> Compare
						</span>

						<span
							className='flex-center gap-x-1 sm:text-xs'
							onClick={(e) => likeProduct(e)}>
							{isLiked ? (
								<IoHeart className='text-lg sm:text-xs' />
							) : (
								<IoHeartOutline className='text-lg sm:text-xs' />
							)}
							Like
						</span>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default ProductCard
