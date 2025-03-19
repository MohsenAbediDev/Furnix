import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { IoMdMenu } from 'react-icons/io'
import { IoHomeOutline } from 'react-icons/io5'
import { MdOutlineShoppingBag, MdOutlineContactPage } from 'react-icons/md'
import { LuShoppingCart } from 'react-icons/lu'
import CartSidebarProduct from './CartSidebarProduct'
import { useSelector } from 'react-redux'
import { calculateTotalPrice } from '../utils/utils'

function Navbar() {
	const { items, loading, error } = useSelector((state) => state.cart)
	const totalPrice = calculateTotalPrice(items)

	const [toggleValue, setToggleValue] = useState(false)
	const [isOpenMenu, setIsOpenMenu] = useState(false)

	const cartSidebar = useRef()
	const menuSidebar = useRef()
	const overlay = useRef()

	const showCartSidebar = () => {
		setToggleValue(!toggleValue)

		isOpenMenu ? showMenu() : null

		if (!toggleValue) {
			cartSidebar.current.classList.remove('hide')
			cartSidebar.current.classList.add('show')

			overlay.current.classList.remove('hide')
			overlay.current.classList.add('show')
		} else {
			cartSidebar.current.classList.remove('show')
			cartSidebar.current.classList.add('hide')

			overlay.current.classList.remove('show')
			overlay.current.classList.add('hide')
		}
	}

	const showMenu = () => {
		setIsOpenMenu(!isOpenMenu)

		if (!isOpenMenu) {
			menuSidebar.current.classList.remove('hide-menu')
			menuSidebar.current.classList.add('show-menu')
		} else {
			menuSidebar.current.classList.remove('show-menu')
			menuSidebar.current.classList.add('hide-menu')
		}
	}

	return (
		<div className='fixed top-0 left-0 w-full h-16 bg-white px-10 sm:px-2 flex-center-between z-30'>
			{/* Logo */}
			<div className='flex-center-start gap-x-2'>
				{/* Menu Icon for Mobile */}
				<IoMdMenu
					className='hidden sm:flex text-3xl cursor-pointer'
					onClick={showMenu}
				/>
				<Link to='/' className='flex-center'>
					<img className='w-8 h-6' src='/images/Logo.png' alt='Furniro' />
					<span className='font-montserrat font-bold text-2xl'>FURNIRO</span>
				</Link>
			</div>

			{/* Routes */}
			<div className='flex-center sm:hidden gap-x-5 font-poppins text-lg font-semibold'>
				<Link to='/'>Home</Link>
				<Link to='/shop'>Shop</Link>
				<Link to='/about'>About</Link>
				<Link to='/contact'>Contact</Link>
			</div>

			{/* Action routes */}
			<div className='flex-center  gap-x-6'>
				<Link to='/user' className='w-5'>
					<img src='/icons/User.png' />
				</Link>

				<button className='w-5'>
					<img src='/icons/Search.png' />
				</button>

				<Link to='/favorite' className='w-5'>
					<img src='/icons/Heart.png' />
				</Link>

				<button className='w-5' onClick={showCartSidebar}>
					<img src='/icons/Cart.png' />
				</button>
			</div>

			{/* Menu Sidebar for Mobile */}
			<div
				ref={menuSidebar}
				className='hidden sm:flex flex-col gap-5 py-5 px-2 absolute w-2/4 h-screen z-50 top-16 left-0 bg-white transition-all hide-menu'>
				<Link to='/' className='menu'>
					<IoHomeOutline />
					Home
				</Link>
				<Link to='/shop' className='menu'>
					<MdOutlineShoppingBag />
					Shop
				</Link>
				<Link to='/cart' className='menu'>
					<LuShoppingCart />
					Cart
				</Link>
				<Link to='/contact' className='menu'>
					<MdOutlineContactPage />
					Contact
				</Link>
			</div>

			{/* Cart Sidebar */}
			<div
				ref={cartSidebar}
				className='absolute top-0 right-0 bg-white w-80 h-[500px] px-5 pt-5 pb-2 z-50 rounded-bl-md transition-all hide'>
				{/* Title */}
				<div className='flex-center-between'>
					<p className='font-bold text-xl'>Shopping Cart</p>
					<img className='cursor-pointer' src='/icons/Cart-Clear.png' />
				</div>

				{/* Products Section */}
				<div className='flex flex-col custom-scrollbar-y my-5 pt-5 gap-y-9 border-t-[1px] border-grayBorder h-[300px]'>
					{/* Products  */}
					{items &&
						items.map((product) => (
							<CartSidebarProduct key={product.id} product={product} />
						))}

					{items.length === 0 && (
						<p className='text-center text-xl text-blue'>
							Your Cart is Empty :(
						</p>
					)}
				</div>

				{/* Info */}
				<div className='flex flex-col'>
					<div className='flex-center-between'>
						<p> Subtotal: </p>
						<span className='text-gold text-lg'> ${totalPrice} </span>
					</div>

					<div className='my-4 border-t-[1px] border-grayBorder'></div>

					<div className='flex-center-between'>
						<Link
							to='/cart'
							onClick={showCartSidebar}
							className='py-2 px-10 border-[1px] rounded-full'>
							Cart
						</Link>

						<Link
							to='/checkout'
							onClick={showCartSidebar}
							className='py-2 px-10 border-[1px] rounded-full'>
							Checkout
						</Link>
					</div>
				</div>
			</div>

			{/* Overlay in Backdrop Sidebar */}
			<div
				ref={overlay}
				onClick={showCartSidebar}
				className='fixed w-full h-full top-0 left-0 bg-black/50 z-30 transition-all cursor-pointer hide'></div>
		</div>
	)
}

export default Navbar
