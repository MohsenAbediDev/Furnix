import { Link } from 'react-router-dom'

function Footer() {
	return (
		<div className='w-full h-[400px] mt-10 border-t-[1px] border-t-grayBorder'>
			{/* Links and more */}
			<div className='flex-start-between h-auto px-20 mt-5 mb-10'>
				{/* Company */}
				<div className='flex flex-col h-full gap-y-10'>
					<span className='font-poppins font-bold text-xl'>Furniro</span>

					<div className='text-footerText w-9/12 leading-8 text-sm'>
						<p>400 University Drive Suite 200 Coral Gables,</p>

						<p>FL 33134 USA</p>
					</div>
				</div>

				{/* Links */}
				<div className='flex flex-col h-full gap-y-10'>
					<span className='text-footerText'>Links</span>

					<div className='flex flex-col gap-y-8'>
						<Link to='/'> Home </Link>
						<Link to='/shop'> Shop </Link>
						<Link to='/about'> About </Link>
						<Link to='/contact'> Contact </Link>
					</div>
				</div>

				{/* Help */}
				<div className='flex flex-col h-full gap-y-10'>
					<span className='text-footerText'>Help</span>

					<div className='flex flex-col gap-y-8'>
						<Link to='/payment-options'> Payment Options </Link>
						<Link to='/returns'> Returns </Link>
						<Link to='/privacy-policy'> Privacy Policy </Link>
					</div>
				</div>

				{/* Newsletter */}
				<div className='flex flex-col h-full gap-y-10'>
					<span className='text-footerText'>Newsletter</span>

					<form className='flex-center gap-x-2'>
						<input
							type='email'
							className='footer-input'
							placeholder='Enter Your Email Address'
						/>
						<button className='footer-input'> Submit </button>
					</form>
				</div>
			</div>

			<div className='flex-center w-[88%] mx-auto border-t-2 border-t-grayBorder'></div>

			{/* Copy right */}
			<div className='px-20 py-8'>
				<p>2024 furino. All rights reverved</p>
			</div>
		</div>
	)
}

export default Footer
