import InfoStrip from '../components/InfoStrip'
import { FaTrash } from "react-icons/fa";

function Cart() {
	return (
		<>
			<div className='flex-start-between w-10/12 gap-x-8 mx-auto p-20'>
				{/* Product Inforamtion */}
				<div className='flex-center flex-col w-full'>
					{/* Information bar */}
					<div className='flex-center-between w-full bg-primary py-2 px-24 rounded-sm'>
						<div className='flex-center gap-x-16 font-semibold'>
							<p> Product </p>
							<p> Price </p>
						</div>

						<div className='flex-center gap-x-6 font-semibold'>
							<p> Quantity </p>
							<p> Subtotal </p>
						</div>
					</div>

					{/* Products */}
					<div className='flex flex-col gap-y-5 w-full mt-5'>
						<div className='flex-center-start w-full h-24 px-2 py-2 border-b-[1px]'>
							{/* Product image */}
							<img
								className='w-24 h-full rounded-md'
								src='/images/image 1.png'
							/>

							<div className='flex-center-between w-full ml-2'>
								{/* Product Name and Price */}
								<div className='flex-center gap-x-16 font-semibold text-footerText'>
									<p> Product </p>
									<p> Price </p>
								</div>

								{/* Product Quantity and Subtotal */}
								<div className='flex-center gap-x-16 ml-8 font-semibold'>
									<input
										type='number'
										className='w-7 h-7 border-[1px] border-grayBorder outline-none text-center rounded-sm'
										min={1}
										defaultValue={1}
									/>
									<span> $150 </span>
								</div>

                <FaTrash className='text-xl text-gold mr-2 cursor-pointer' />
							</div>
						</div>
					</div>
				</div>

				{/* Cart totals */}
				<div className='flex-center flex-col w-96 gap-y-8 p-10 bg-primary rounded-sm'>
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
