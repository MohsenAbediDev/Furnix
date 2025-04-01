import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import InfoStrip from '../components/InfoStrip'
import { FaTrash } from 'react-icons/fa'
import { calculateTotalPrice } from '../utils/utils'
import { removeProduct, clearCart, updateQuantity } from '../store/cart/cartSlice'
import Swal from 'sweetalert2'

function Cart() {
	const dispatch = useDispatch()
	const { items } = useSelector((state) => state.cart)

	const [quantities, setQuantities] = useState(
		items.reduce((acc, product) => {
			acc[product.id] = product.quantity
			return acc
		}, {})
	)

	const totalPrice = calculateTotalPrice(items)

	const location = useLocation()

	const modalConfig = {
		title: 'Confirm Purchase',
		text: 'Are you sure you want to complete your purchase?',
		icon: 'warning',
		confirmButtonText: 'Yes, Buy Now',
		confirmButtonColor: '#28a745',
		showCancelButton: true,
		cancelButtonText: 'Cancel',
		cancelButtonColor: '#d33',
	}

	const removeProductFromCart = (id) => {
		dispatch(removeProduct(id))
	}

	// Function to change quantity value and update in local state and redux
	const handleQuantityChange = (id, newQuantity) => {
		if (newQuantity < 1) return
		setQuantities((prev) => ({ ...prev, [id]: newQuantity }))
		dispatch(updateQuantity({ id, quantity: newQuantity }))
	}

	// Show Alert
	const ShowAlert = () => {
		if (items.length !== 0) {
			Swal.fire(modalConfig).then((result) => {
				if (result.isConfirmed) {
					dispatch(clearCart())
				}
			})
		}
	}

	if (location.search == '?checkout') {
		ShowAlert()
	}

	return (
		<>
			{/* Banner */}
			<PageBanner />

			<div className='flex-start-between sm:flex-col w-9/12 md:w-full sm:w-full gap-x-6 sm:gap-x-0 mx-auto p-10 md:p-4 sm:p-2'>
				{/* Product Information */}
				<div className='flex-center flex-col w-full'>
					{/* Information bar */}
					<div className='flex-center-between w-full bg-primary py-1.5 px-20 rounded-sm sm:px-3 text-xs'>
						<div className='flex-center gap-x-16 sm:gap-x-5 font-semibold sm:ml-[60px]'>
							<p> Product </p>
							<p> Price </p>
						</div>

						<div className='flex-center gap-x-8 sm:gap-x-3 sm:mr-1 font-semibold'>
							<p> Quantity </p>
							<p> Subtotal </p>
						</div>
					</div>

					{/* Products */}
					<div className='flex flex-col gap-y-4 w-full mt-4'>
						{items?.map((product) => (
							<div
								key={product.id}
								className='flex-center w-full h-20 px-2 py-1.5 border-b'>
								{/* Product image */}
								<img
									className='w-16 h-16 sm:w-16 sm:h-16 rounded-md'
									src={product.image}
								/>

								<div className='flex-center-between flex-grow w-full ml-3 sm:ml-1.5'>
									{/* Product Name and Price */}
									<div className='flex max-w-32 gap-x-16 sm:gap-x-3.5 text-sm font-semibold text-footerText'>
										<p>{product.name}</p>
										<p>{product.price}</p>
									</div>

									{/* Product Quantity and Subtotal */}
									<div className='flex-center gap-x-14 sm:gap-x-6 ml-24 sm:ml-10 text-sm font-semibold'>
										<input
											type='number'
											className='w-6 h-6 sm:w-5 border border-grayBorder outline-none text-center rounded-sm'
											min={1}
											value={quantities[product.id] || 1}
											onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
										/>
										<span>${product.price * (quantities[product.id] || 1)}</span>
									</div>

									{/* Remove Product */}
									<FaTrash
										className='text-lg sm:text-sm text-gold cursor-pointer'
										onClick={() => removeProductFromCart(product.id)}
									/>
								</div>
							</div>
						))}

						{items.length === 0 && (
							<p className='text-black text-xl text-center mt-2'>
								Your Cart is Empty
							</p>
						)}
					</div>
				</div>

				{/* Cart totals */}
				<div className='flex-center flex-col w-80 sm:w-full gap-y-6 p-8 sm:mt-8 bg-primary rounded-sm'>
					<p className='text-xl font-bold'> Cart Totals </p>

					{/* Details */}
					<div className='flex-center flex-col w-full gap-y-4'>
						{/* SubTotal */}
						<div className='flex-center-between w-4/5'>
							<p className='font-semibold text-xs'>Subtotal:</p>

							<span className='text-footerText text-xs'> ${totalPrice} </span>
						</div>

						{/* Total */}
						<div className='flex-center-between w-4/5'>
							<p className='font-semibold text-sm'>Total:</p>

							<span className='text-gold text-base'> ${totalPrice} </span>
						</div>
					</div>

					<button className='w-40 border p-2 rounded-lg' onClick={ShowAlert}>
						Check Out
					</button>
				</div>
			</div>

			<InfoStrip />
		</>
	)
}

export default Cart
