import { useState } from 'react'
import PageBanner from '../components/PageBanner'
import Products from '../components/Products'
import PaginationRounded from '../components/PaginationRounded'

function Shop() {
	const [resultCount, setResultCount] = useState(16)
	const [sort, setSort] = useState('Default')

	return (
		<div>
			{/* Banner */}
			<PageBanner />

			{/* Filter and Display Bar */}
			<div className='bg-primary h-16 px-32 flex-center-between '>
				{/* Filter section */}
				<div className='flex-center gap-x-3'>
					{/* Filter */}
					<img
						src='/icons/FilterSetting.png'
						className='cursor-pointer'
					/>
					<span className='font-semibold cursor-pointer'>Filter</span>
					<img src='/icons/Grid.png' className='cursor-pointer' />
					<img src='/icons/ViewList.png' className='cursor-pointer' />

					<span className='font-light mx-2'>|</span>

					{/* Results */}

					<div className='flex-center gap-x-1 text-sm cursor-pointer'>
						Showing
						<span>1-{resultCount}</span>
						of
						<span>32</span>
						results
					</div>
				</div>

				{/* Display section */}
				<div className='flex-center gap-x-3'>
					{/* Filter */}
					<div className='flex-center gap-x-2 text-sm cursor-pointer'>
						Show
						<input
							type='number'
							className='bg-white w-7 h-7 outline-none text-center rounded-sm'
							defaultValue={resultCount}
						/>
						Sort by
						<select className='outline-none p-1 cursor-pointer rounded-sm'>
							<option>Default</option>
						</select>
					</div>
				</div>
			</div>

			{/* Show products */}
			<Products title='' usePagination={true} /> 

			{/* Use pagination */}
			<PaginationRounded />
		</div>
	)
}

export default Shop
