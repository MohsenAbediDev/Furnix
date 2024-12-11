import { IoIosArrowForward } from 'react-icons/io'

function PageBanner() {
	const pageName = window.location.pathname.split('/')[1]

	return (
		<div className='relative h-52'>
			<div className="absolute h-full inset-0 bg-[url('public/images/pageBanner.png')] bg-cover bg-center opacity-50"></div>

			<div className='relative w-full h-full flex-center flex-col gap-y-2 font-poppins z-10'>
				{/* Logo */}
				<img className='w-10' src='public/images/logo.png' alt='Furniro logo' />

				{/* Page name */}
				<h1 className='font-bold text-4xl'>{pageName}</h1>

				{/* Route */}
				<div className='flex-center gap-x-1'>
					<span className='font-semibold'>Home</span>
					<IoIosArrowForward className='text-xl' />
					{pageName}
				</div>
			</div>
		</div>
	)
}

export default PageBanner
