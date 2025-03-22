import { useEffect } from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/products/productsSlice'

function Products({ title, usePagination, resultCount, sort }) {
	const dispatch = useDispatch()
	const { items, loading, error } = useSelector((state) => state.products)

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
		return <p className='font-bold text-xl text-center mt-10'>Error! {error}</p>

	if (loading) {
		return (
			<section className='flex-start-center'>
				<div
					className={`w-10/12 sm:w-11/12 flex-center-start flex-col ${
						!title && 'mt-8'
					}`}>
					{/* Show title */}
					{title && <p className='my-12 text-3xl font-semibold'>{title}</p>}

					{/* Show products */}
					<div className='grid grid-cols-4 sm:grid-cols-2 gap-5 sm:gap-x-5'>
						{[...Array(8)].map((_, i) => (
							<div
								key={i}
								className='w-[245px] sm:w-[190px] h-[383px] sm:h-[350px] bg-card relative overflow-hidden rounded-lg flex flex-col'>
								{/* Product Image */}
								<div className='w-full h-[250px] sm:h-[200px] bg-skeleton animate-pulse rounded-t-lg'></div>

								{/* Product Information */}
								<div className='w-full p-4 flex flex-col gap-y-3'>
									<div className='w-3/4 h-6 bg-skeleton animate-pulse rounded-md'></div>
									<div className='w-1/2 h-5 bg-skeleton animate-pulse rounded-md'></div>
									<div className='w-1/4 h-6 bg-skeleton animate-pulse rounded-md'></div>
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
				{title && <p className='my-12 text-3xl font-semibold'>{title} </p>}

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
						className='border-gold border-2 text-base text-gold px-14 py-2 my-7 hover:bg-gold hover:text-white duration-200'>
						Show More
					</Link>
				)}
			</div>
		</section>
	)
}

export default Products
