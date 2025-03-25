import { useEffect } from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/products/productsSlice'

function Products({ isFavorite, title, usePagination, resultCount, sort }) {
	const dispatch = useDispatch()

	const favorites = useSelector((state) => state.favorite.favorites)
	const {
		items: productItems,
		loading,
		error,
	} = useSelector((state) => state.products)

	const items = isFavorite ? favorites : productItems

	useEffect(() => {
		if (items.length === 0) {
			dispatch(fetchProducts())
		}
	}, [dispatch, items.length])

	const sortedItems = [...items].sort((a, b) => {
		if (sort === 'low_to_high') return a.price - b.price
		if (sort === 'high_to_low') return b.price - a.price
		return 0
	})

	if (error)
		return <p className='font-bold text-lg text-center mt-8'>Error! {error}</p>

	if (loading) {
		return (
			<section className='flex-start-center'>
				<div
					className={`w-9/12 sm:w-10/12 flex-center-start flex-col ${
						!title && 'mt-6'
					}`}>
					{title && <p className='my-10 text-2xl font-semibold'>{title}</p>}
					<div className='grid grid-cols-4 sm:grid-cols-2 gap-4 sm:gap-x-4'>
						{[...Array(8)].map((_, i) => (
							<div
								key={i}
								className='w-[220px] sm:w-[170px] h-[345px] sm:h-[315px] bg-card relative overflow-hidden rounded-md flex flex-col'>
								<div className='w-full h-[225px] sm:h-[180px] bg-skeleton animate-pulse rounded-t-md'></div>
								<div className='w-full p-3 flex flex-col gap-y-2'>
									<div className='w-2/3 h-5 bg-skeleton animate-pulse rounded'></div>
									<div className='w-1/3 h-4 bg-skeleton animate-pulse rounded'></div>
									<div className='w-1/5 h-5 bg-skeleton animate-pulse rounded'></div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		)
	}

	return (
		<section id='products' className='flex-start-center'>
			<div
				className={`w-10/12 sm:w-11/12 flex-center-start flex-col ${
					!title && 'mt-8'
				}`}>
				{/* Show title */}
				{title && <p className='my-10 text-2xl font-semibold'>{title} </p>}

				{/* Show products */}
				<div className='grid grid-cols-4 sm:grid-cols-2 gap-5 sm:gap-x-5'>
					{sortedItems &&
						sortedItems
							.slice(0, resultCount)
							.map((product) => (
								<ProductCard key={product.id} product={product} />
							))}
				</div>

				{/* Show pagination or show more button */}
				{usePagination ? (
					''
				) : (
					<Link
						to='/shop'
						className='border-gold border text-sm text-gold px-12 py-1.5 my-6 hover:bg-gold hover:text-white duration-200 rounded-md'>
						Show More
					</Link>
				)}
			</div>
		</section>
	)
}

export default Products
