function Range() {
	return (
		<section className='w-full flex-center'>
			<div>
				<div className='flex flex-col items-center my-10'>
					<p className='text-2xl font-bold'>Browse The Range</p>

					<p className='text-gray mt-2 sm:text-center sm:px-5'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit
					</p>
				</div>

				<div className='flex-center-between sm:flex-center gap-x-5 sm:gap-y-4 sm:flex-wrap'>
					{/* Dining Box */}
					<div className='flex flex-col items-center'>
						<img
							src='/images/image 106.png'
							className='rounded-md w-[250px] h-[342px]'
						/>
						<p className='font-semibold text-xl mt-6 sm:mt-2'>Dining</p>
					</div>

					{/* Living Box */}
					<div className='flex flex-col items-center'>
						<img
							src='/images/image 100.png'
							className='rounded-md w-[250px] h-[342px]'
						/>
						<p className='font-semibold text-xl mt-6'>Living</p>
					</div>

					{/* Bedroom Box */}
					<div className='flex flex-col items-center'>
						<img
							src='/images/image 101.png'
							className='rounded-md w-[250px] h-[342px]'
						/>
						<p className='font-semibold text-xl mt-6'>Bedroom</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Range
