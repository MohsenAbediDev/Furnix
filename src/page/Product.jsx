import { Link } from 'react-router-dom'
import { MdArrowForwardIos } from 'react-icons/md'
import ProductState from '../components/ProductState'

export default function Product() {
	return (
		<div>
			<div className='bg-primary h-16 px-32 sm:px-2 flex-center-between '>
				<div className='flex-center-between gap-x-5'>
					<Link to='/' className='flex-center gap-x-3'>
						<span className='text-footerText'>Home</span>
						<MdArrowForwardIos />
					</Link>
					<Link to='/shop' className='flex-center gap-x-2'>
						<span className='text-footerText'>Shop</span>
						<MdArrowForwardIos />
					</Link>
					<span className='bg-black w-[1.5px] h-5'></span>
					<p>Product Name</p>
				</div>
			</div>

			<ProductState />
		</div>
	)
}
