import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<div className='flex-center-between w-full h-16 px-10'>
			{/* Logo */}
			<div className='flex-center'>
				<img className='w-8 h-6' src='public/images/Logo.png' alt='Furniro' />
				<span className='font-montserrat font-bold text-2xl'>FURNIRO</span>
			</div>

			{/* Routes */}
			<div className='flex-center gap-x-5 font-poppins text-lg font-medium'>
				<Link to='/'>Home</Link>
				<Link to='/shop'>Shop</Link>
				<Link to='/about'>About</Link>
				<Link to='/contact'>Contact</Link>
			</div>

			{/* Action routes */}
			<div className='flex-center gap-x-6'>
				<Link to='/user' className='w-5'>
					<img src='public/icons/User.png' />
				</Link>

				<button className='w-5'>
					<img src='public/icons/Search.png' />
				</button>

				<Link to='/favorite' className='w-5'>
					<img src='public/icons/Heart.png' />
				</Link>

				<button className='w-5'>
					<img src='public/icons/Cart.png' />
				</button>
			</div>
		</div>
	)
}

export default Navbar
