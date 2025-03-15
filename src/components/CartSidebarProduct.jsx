import { FaCircleXmark } from 'react-icons/fa6'

function CartSidebarProduct() {
	return (
		<div className='flex-center-between'>
			<div className='flex'>
				<img className='w-20 rounded-md' src='./images/image 9.png' />

				<div className='flex-start-center flex-col gap-y-3 ml-5'>
					<p> Muggo </p>

					<div className='flex-center-start gap-x-2'>
						<span> 1 </span> X <span className='text-gold'> $150 </span>
					</div>
				</div>
			</div>

			<FaCircleXmark className='text-lg text-footerText cursor-pointer' />
		</div>
	)
}

export default CartSidebarProduct
