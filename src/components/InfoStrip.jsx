import React from 'react'

function InfoStrip() {
	return (
		<div className='flex-center sm:flex-col sm:gap-y-8 bg-primary gap-x-16 py-16 sm:py-8 mt-10'>
			{/* Quality */}
			<div className='flex-center gap-x-2'>
				<img src='/icons/Trophy.png' className='w-10' />

				<div className='flex flex-col'>
					{/* Title */}
					<span className='font-semibold text-lg'> High Quality </span>

					{/* Description */}
					<p className='text-infoStripText text-sm'>
						{' '}
						crafted from top materials{' '}
					</p>
				</div>
			</div>

			{/* Warranty */}
			<div className='flex-center gap-x-2'>
				<img src='/icons/Warranty.png' className='w-10' />

				<div className='flex flex-col'>
					{/* Title */}
					<span className='font-semibold text-lg'> Warranty Protection </span>

					{/* Description */}
					<p className='text-infoStripText text-sm'> Over 2 years </p>
				</div>
			</div>

			{/* Shipping */}
			<div className='flex-center gap-x-2 sm:mr-14'>
				<img src='/icons/Shipping.png' className='w-10' />

				<div className='flex flex-col'>
					{/* Title */}
					<span className='font-semibold text-lg'> Free Shipping </span>

					{/* Description */}
					<p className='text-infoStripText text-sm'> Order over $150 </p>
				</div>
			</div>

			{/* Support */}
			<div className='flex-center gap-x-2'>
				<img src='/icons/Support.png' className='w-10' />

				<div className='flex flex-col'>
					{/* Title */}
					<span className='font-semibold text-lg'> Customer Support </span>

					{/* Description */}
					<p className='text-infoStripText text-sm'> Dedicated support </p>
				</div>
			</div>
		</div>
	)
}

export default InfoStrip
