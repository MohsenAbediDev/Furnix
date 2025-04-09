import { FaCircleXmark } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { removeProduct } from '../store/cart/cartSlice'
import { isGithubPages } from '../utils/utils'

function CartSidebarProduct({ product }) {
	const dispatch = useDispatch()

	const removeProductFromCart = (id) => {
		dispatch(removeProduct(id))
	}

	return (
		<div className='flex-center-between'>
			<div className='flex'>
				<img
					className='w-16 rounded-md'
					src={isGithubPages() ? `/Furnix/${product.image}` : product.image}
				/>
				<div className='flex-start flex-col gap-y-2 ml-4'>
					<p>{product.name}</p>
					<div className='flex-center-start gap-x-1'>
						<span>{product.quantity} X</span>
						<span className='text-gold'>${product.price}</span>
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
