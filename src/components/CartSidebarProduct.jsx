import { FaCircleXmark } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { removeProduct } from '../store/cart/cartSlice'

function CartSidebarProduct({ product }) {
	const dispatch = useDispatch()

	const removeProductFromCart = (id) => {
		dispatch(removeProduct(id))
	}

	return (
		<div className='flex-center-between'>
			<div className='flex'>
				<img className='w-20 rounded-md' src={product.image} />

				<div className='flex-start-center flex-col gap-y-3 ml-5'>
					<p> {product.name} </p>

					<div className='flex-center-start gap-x-2'>
						<span> {product.quantity} </span> X
						<span className='text-gold'> ${product.price} </span>
					</div>
				</div>
			</div>

			<FaCircleXmark
				className='text-lg text-footerText cursor-pointer'
				onClick={() => removeProductFromCart(product.id)}
			/>
		</div>
	)
}

export default CartSidebarProduct
