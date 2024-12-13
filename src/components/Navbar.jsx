import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaCircleXmark } from 'react-icons/fa6'

function Navbar() {
	const [toggleValue, setToggleValue] = useState(false)

	const sidebar = useRef()
	const overlay = useRef()

	const cartSidebar = () => {
		setToggleValue(!toggleValue)

		if (!toggleValue) {
			sidebar.current.classList.remove('hide')
			sidebar.current.classList.add('show')

			overlay.current.classList.remove('hide')
			overlay.current.classList.add('show')
		} else {
			sidebar.current.classList.remove('show')
			sidebar.current.classList.add('hide')

			overlay.current.classList.remove('show')
			overlay.current.classList.add('hide')
		}
	}

	return (
		<div className='relatvie flex-center-between w-full h-16 px-10'>
			{/* Logo */}
			<Link to='/' className='flex-center'>
				<img className='w-8 h-6' src='/images/Logo.png' alt='Furniro' />
				<span className='font-montserrat font-bold text-2xl'>FURNIRO</span>
			</Link>

			{/* Routes */}
			<div className='flex-center gap-x-5 font-poppins text-lg font-semibold'>
				<Link to='/'>Home</Link>
				<Link to='/shop'>Shop</Link>
				<Link to='/about'>About</Link>
				<Link to='/contact'>Contact</Link>
			</div>

			{/* Action routes */}
			<div className='flex-center gap-x-6'>
				<Link to='/user' className='w-5'>
					<img src='/icons/User.png' />
				</Link>

				<button className='w-5'>
					<img src='/icons/Search.png' />
				</button>

				<Link to='/favorite' className='w-5'>
					<img src='/icons/Heart.png' />
				</Link>

				<button className='w-5' onClick={cartSidebar}>
					<img src='/icons/Cart.png' />
				</button>
			</div>

			{/* Cart Sidebar */}
			<div
				ref={sidebar}
				className='absolute top-0 right-0 bg-white w-80 h-[500px] px-5 pt-5 pb-2 z-50 rounded-bl-md transition-all hide'>
				{/* Title */}
				<div className='flex-center-between'>
					<p className='font-bold text-xl'>Shopping Cart</p>
					<img className='cursor-pointer' src='/icons/Cart-Clear.png' />
				</div>

				{/* Products Section */}
				<div className='flex flex-col overflow-y-auto scroll my-5 pt-5 gap-y-9 border-t-[1px] border-grayBorder h-[300px]'>
					{/* Products  */}
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
				</div>

				{/* Info */}
				<div className='flex flex-col'>
					<div className='flex-center-between'>
						<p> Subtotal: </p>
						<span className='text-gold text-lg'> $150 </span>
					</div>

					<div className='my-4 border-t-[1px] border-grayBorder'></div>

					<div className='flex-center-between'>
						<Link
							to='/cart'
							onClick={cartSidebar}
							className='py-2 px-10 border-[1px] rounded-full'>
							Cart
						</Link>

						<Link
							to='/checkout'
							onClick={cartSidebar}
							className='py-2 px-10 border-[1px] rounded-full'>
							Checkout
						</Link>
					</div>
				</div>
			</div>

			{/* Overlay in Backdrop Sidebar */}
			<div
				ref={overlay}
				onClick={cartSidebar}
				className='fixed w-full h-full top-0 left-0 bg-black/50 z-30 transition-all cursor-pointer hide'></div>
		</div>
	)
}

export default Navbar
