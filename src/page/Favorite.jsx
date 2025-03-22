import { useState } from 'react'
import PageBanner from '../components/PageBanner'
import Products from '../components/Products'
import InfoStrip from '../components/InfoStrip'
import PaginationRounded from '../components/PaginationRounded'
import { useSelector } from 'react-redux'
import FavoriteProducts from '../components/FavoriteProducts'

function Favorite() {
	const [resultCount, setResultCount] = useState(8)
	const [sort, setSort] = useState('default')

	return (
		<div>
			{/* Banner */}
			<PageBanner />

			{/* Filter and Display Bar */}
			<div className='bg-primary h-16 px-32 sm:px-4 flex-center-between '>
				{/* Filter section */}
				<div className='flex-center gap-x-3 '>
					{/* Filter */}
					<img src='/icons/FilterSetting.png' className='cursor-pointer' />
					<span className='font-semibold cursor-pointer'>Filter</span>
					<img src='/icons/Grid.png' className='cursor-pointer' />
					<img src='/icons/ViewList.png' className='cursor-pointer' />

					<span className='font-light mx-2'>|</span>

					{/* Results */}
					<div className='flex-center sm:hidden gap-x-1 text-sm'>
						Showing
						<span>{resultCount > 0 ? `1-${resultCount}` : '0'}</span>
						of
						<span>8</span>
						results
					</div>
				</div>

				{/* Display section */}
				<div className='flex-center gap-x-3'>
					{/* Filter */}
					<div className='flex-center gap-x-2 text-sm'>
						Show
						<input
							type='number'
							className='bg-white w-7 h-7 outline-none text-center rounded-sm'
							defaultValue={resultCount}
							onChange={(e) => setResultCount(Number(e.target.value))}
						/>
						Sort by
						<select
							className='outline-none p-1 cursor-pointer rounded-sm'
							onChange={(e) => setSort(e.target.value)}>
							<option value='default'>Default</option>
							<option value='low_to_high'>Low to High</option>
							<option value='high_to_low'>High to Low</option>
						</select>
					</div>
				</div>
			</div>

			{/* Show favorite products */}
			<FavoriteProducts
				title=''
				usePagination={true}
				resultCount={resultCount}
				sort={sort}
			/>

			{/* Use pagination */}
			<PaginationRounded />

			{/* Show information strip */}
			<InfoStrip />
		</div>
	)
}

export default Favorite
