import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'

function Products({ title, usePagination }) {
	return (
		<section id='products' className='flex-start-center'>
			<div className={`w-10/12 sm:w-11/12 flex-center-start flex-col ${!title && 'mt-8'}`}>
				{/* Show title */}
				{title && <p className='my-12 text-3xl font-semibold'>{title} </p>}

				{/* Show products */}
				<div className='grid grid-cols-4 sm:grid-cols-2 gap-5'>
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
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
