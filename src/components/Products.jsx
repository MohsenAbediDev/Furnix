import ProductCard from './ProductCard'

function Products({ title, usePagination }) {
	return (
		<section className='flex justify-center'>
			<div className={`w-10/12 flex flex-col items-center ${!title && 'mt-8'}`}>
				{/* Show title */}
				{title && <p className='my-12 text-3xl font-semibold'>{title} </p>}

				{/* Show products */}
				<div className='grid grid-cols-4 gap-5'>
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
					<button className='border-gold border-2 text-base text-gold px-14 py-2 my-7 hover:bg-gold hover:text-white duration-200'>
						Show More
					</button>
				)}
			</div>
		</section>
	)
}

export default Products
