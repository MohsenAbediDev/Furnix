import { Link } from 'react-router-dom'
import { IoShareSocialOutline, IoHeartOutline } from 'react-icons/io5'
import { MdOutlineCompareArrows } from 'react-icons/md'

function ProductCard() {
	const showCart = (e) => {
		e.preventDefault()
	}

	return (
		<Link
			to='/product/1'
			className='w-[245px] sm:w-[190px] h-[383px] sm:h-[350px] bg-card relative overflow-hidden'>
			<img src='/images/image 1.png' className='w-full' />

			<div className='w-full p-4 flex flex-col gap-y-2'>
				<p className='font-semibold text-xl'>Grifo</p>
				<p className='text-gray text-sm'>Night lamp</p>
				<p className='font-semibold text-lg'>$ 2500</p>
			</div>

			<div className='absolute w-full h-full bg-[#666666bf] z-10 top-0 flex-center opacity-0 hover:opacity-100 duration-200'>
				<div className='w-full flex flex-col items-center'>
					<button
						onClick={(e) => showCart(e)}
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
