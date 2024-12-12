function Range() {
	return (
		<section className='w-full flex-center'>
			<div>
				<div className='flex flex-col items-center my-12'>
					<p className='text-3xl font-bold'>Browse The Range</p>
					<p className='text-gray'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit
					</p>
				</div>
				<div className='flex-center-between gap-x-6'>
					<div className='flex flex-col items-center'>
						<img
							src='/images/image 106.png'
							className='rounded-md w-[281px] h-[380px]'
						/>
						<p className='font-semibold text-2xl mt-7'>Dining</p>
					</div>
					<div className='flex flex-col items-center'>
						<img
							src='/images/image 100.png'
							className='rounded-md w-[281px] h-[380px]'
						/>
						<p className='font-semibold text-2xl mt-7'>Living</p>
					</div>
					<div className='flex flex-col items-center'>
						<img
							src='/images/image 101.png'
							className='rounded-md w-[281px] h-[380px]'
						/>
						<p className='font-semibold text-2xl mt-7'>Bedroom</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Range
