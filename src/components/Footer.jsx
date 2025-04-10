import { Link } from 'react-router-dom'

function Footer() {
	return (
		<div className='w-full h-[400px] border-t-[1px] border-t-grayBorder'>
			{/* Links and more */}
			<div className='flex-start-between flex-wrap h-auto px-20 sm:px-5 mt-5 mb-10'>
				{/* Company */}
				<div className='flex flex-col h-full gap-y-10 sm:gap-y-5 sm:flex-[100%] mb-5'>
					<span className='font-poppins font-bold text-xl'>Furniro</span>
					<div className='text-footerText w-9/12 leading-8 text-sm'>
						<p>400 University Drive Suite 200 Coral Gables,</p>
						<p>FL 33134 USA</p>
					</div>
				</div>

				{/* Links */}
				<div className='flex flex-col h-full gap-y-10 sm:gap-y-5 sm:flex-[50%] mb-5'>
					<span className='text-footerText'>Links</span>
					<div className='flex flex-col gap-y-8'>
						<Link to='/'> Home </Link>
						<Link to='/shop'> Shop </Link>
						<Link to='/about'> About </Link>
						<Link to='/cart'> Cart </Link>
					</div>
				</div>

				{/* Help */}
				<div className='flex flex-col h-full gap-y-10 sm:gap-y-5 sm:flex-[50%] mb-5'>
					<span className='text-footerText'>Help</span>
					<div className='flex flex-col gap-y-8'>
						<Link to='/payment-options'> Payment Options </Link>
						<Link to='/returns'> Returns </Link>
						<Link to='/privacy-policy'> Privacy Policy </Link>
					</div>
				</div>

				{/* Newsletter */}
				<div className='flex flex-col h-full gap-y-10 sm:gap-y-5 sm:flex-[100%] mb-5 sm:mt-10'>
					<span className='text-footerText'>Newsletter</span>
					<form className='flex-center sm:flex-center-start gap-x-2'>
						<input
							type='email'
							className='footer-input sm:max-w-60'
							placeholder='Enter Your Email Address'
						/>
						<button className='footer-input'> Submit </button>
					</form>
				</div>
			</div>

			<div className='flex-center w-[88%] mx-auto border-t-2 border-t-grayBorder'></div>

			{/* Copy right */}
			<div className='px-20 py-8'>
				<p>2024 furinro. All rights reserved</p>
			</div>
		</div>
	)
}

export default Footer
