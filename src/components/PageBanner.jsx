import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { isGithubPages } from '../utils/utils'

function PageBanner() {
	const pageName = window.location.pathname.split('/')[1]

	return (
		<div className='relative h-48'>
			<div className="absolute h-full inset-0 bg-[url('/images/pageBanner.png')] bg-cover bg-center opacity-50"></div>

			<div className='relative w-full h-full flex-center flex-col gap-y-2 font-poppins z-10'>
				{/* Logo */}
				<img
					className='w-9'
					src={isGithubPages() ? '/Furnix/images/Logo.png' : '/images/Logo.png'}
					alt='Furniro logo'
				/>

				{/* Page name */}
				<h1 className='font-bold text-3xl'>{pageName}</h1>

				{/* Route */}
				<div className='flex-center gap-x-1'>
					<Link to='/' className='font-semibold'>
						Home
					</Link>
					<IoIosArrowForward className='text-lg' />
					{pageName}
				</div>
			</div>
		</div>
	)
}

export default PageBanner
