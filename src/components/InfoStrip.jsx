function InfoStrip() {
	return (
		<div className='flex-center sm:flex-col sm:gap-y-8 bg-primary gap-x-14 py-14 sm:py-8 mt-10'>
			{/* Quality */}
			<div className='flex-center gap-x-2'>
				<img src='/icons/Trophy.png' className='w-9' />
				<div className='flex flex-col'>
					<span className='font-semibold text-base'>High Quality</span>
					<p className='text-infoStripText text-xs'>
						crafted from top materials
					</p>
				</div>
			</div>

			{/* Warranty */}
			<div className='flex-center gap-x-2'>
				<img src='/icons/Warranty.png' className='w-9' />
				<div className='flex flex-col'>
					<span className='font-semibold text-base'>Warranty Protection</span>
					<p className='text-infoStripText text-xs'>Over 2 years</p>
				</div>
			</div>

			{/* Shipping */}
			<div className='flex-center gap-x-2 sm:mr-12'>
				<img src='/icons/Shipping.png' className='w-9' />
				<div className='flex flex-col'>
					<span className='font-semibold text-base'>Free Shipping</span>
					<p className='text-infoStripText text-xs'>Order over $150</p>
				</div>
			</div>

			{/* Support */}
			<div className='flex-center gap-x-2'>
				<img src='/icons/Support.png' className='w-9' />
				<div className='flex flex-col'>
					<span className='font-semibold text-base'>Customer Support</span>
					<p className='text-infoStripText text-xs'>Dedicated support</p>
				</div>
			</div>
		</div>
	)
}

export default InfoStrip
