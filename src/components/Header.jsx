function Header() {
	return (
		<section className="bg-[url('/images/Header.png')] bg-center h-[645px] sm:h-[330px] px-12 sm:px-6 py-[105px] sm:py-4 flex justify-end items-end">
			<div className='w-[580px] h-[390px] sm:h-[270px] bg-primary rounded-lg block px-[33px] sm:px-3 pb-[33px] pt-[50px] sm:py-3 sm:mt-4'>
				<div className='w-full h-full relative'>
					<p className='font-semibold text-sm tracking-[2.7px] sm:hidden'>
						New Arrival
					</p>

					<p className='text-gold font-bold text-[42px] sm:text-xl leading-tight my-2'>
						Discover Our <br /> New Collection
					</p>

					<p className='text-[16px] font-medium'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
						tellus, luctus nec ullamcorper mattis.
					</p>

					<a
						href='#products'
						className='flex-center w-[200px] h-[66px] sm:h-14 bg-gold text-white font-bold block absolute bottom-0 rounded-sm'>
						BUY NOW
					</a>
				</div>
			</div>
		</section>
	)
}

export default Header
