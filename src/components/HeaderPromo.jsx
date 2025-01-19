function HeaderPromo() {
	return (
		<div className='w-[643px] h-[433px] sm:h-[300px] bg-primary rounded-lg block px-[37px] sm:px-4 pb-[37px] pt-[55px] sm:py-4 sm:mt-5'>
			<div className='w-full h-full relative'>
				<p className='font-semibold text-base tracking-[3px] sm:hidden'>New Arrival</p>

				<p className='text-gold font-bold text-[47px] sm:text-2xl leading-tight my-2'>
					Discover Our <br /> New Collection
				</p>

				<p className='text-[18px] font-medium'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
					tellus, luctus nec ullamcorper mattis.
				</p>

				<button className='w-[222px] h-[74px] sm:h-16 bg-gold text-white font-bold block absolute bottom-0 rounded-sm'>
					BUY NOW
				</button>
			</div>
		</div>
	)
}

export default HeaderPromo
