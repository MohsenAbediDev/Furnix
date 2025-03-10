import PageBanner from '../components/PageBanner'
import InfoStrip from '../components/InfoStrip'
import { FaTrash } from 'react-icons/fa'

function Cart() {
	return (
		<>
			{/* Banner */}
			<PageBanner />

			<div className='flex-start-between sm:flex-col w-10/12 sm:w-full gap-x-8 sm:gap-x-0 mx-auto p-20 sm:p-0'>
				{/* Product Inforamtion */}
				<div className='flex-center flex-col w-full'>
					{/* Information bar */}
					<div className='flex-center-between w-full bg-primary py-2 px-24 rounded-sm sm:px-4 sm:text-xs'>
						<div className='flex-center gap-x-16 sm:gap-x-7 font-semibold sm:ml-[72px]'>
							<p> Product </p>
							<p> Price </p>
						</div>

						<div className='flex-center gap-x-6 sm:gap-x-4 sm:mr-6 font-semibold'>
							<p> Quantity </p>
							<p> Subtotal </p>
						</div>
					</div>

					{/* Products */}
					<div className='flex flex-col gap-y-5 w-full mt-5'>
						<div className='flex-center w-full h-24 px-2 py-2 border-b-[1px]'>
							{/* Product image */}
							<img
								className='w-24 h-full sm:w-20 sm:h-20 rounded-md'
								src='/images/image 1.png'
							/>

							<div className='flex-center-between flex-grow w-full ml-4 sm:ml-2'>
								{/* Product Name and Price */}
								<div className='flex gap-x-16 sm:gap-x-4 font-semibold text-footerText'>
									<p>Product</p>
									<p>Price</p>
								</div>

								{/* Product Quantity and Subtotal */}
								<div className='flex-center gap-x-16 sm:gap-x-7 ml-8 font-semibold'>
									<input
										type='number'
										className='w-7 h-7 sm:w-6 border-[1px] border-grayBorder outline-none text-center rounded-sm'
										min={1}
										defaultValue={1}
									/>
									<span>$150</span>
								</div>

								{/* Remove Product */}
								<FaTrash className='text-xl sm:text text-gold cursor-pointer' />
							</div>
						</div>
					</div>
				</div>

				{/* Cart totals */}
				<div className='flex-center flex-col w-96 sm:w-full gap-y-8 p-10 sm:mt-10 bg-primary rounded-sm'>
					<p className='text-2xl font-bold'> Cart Totals </p>

					{/* Details */}
					<div className='flex-center flex-col w-full gap-y-5'>
						{/* SubTotal */}
						<div className='flex-center-between w-4/5'>
							<p className='font-semibold text-sm'>Subtotal:</p>

							<span className='text-footerText text-xs'> $150 </span>
						</div>

						{/* Total */}
						<div className='flex-center-between w-4/5'>
							<p className='font-semibold'>Total:</p>

							<span className='text-gold text-lg'> $150 </span>
						</div>
					</div>

					<button className='w-44 border-[1px] p-3 rounded-xl'>
						Check Out
					</button>
				</div>
			</div>

			<InfoStrip />
		</>
	)
}

export default Cart
