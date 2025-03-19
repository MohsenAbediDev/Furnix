import { Link } from 'react-router-dom'

function Notfound() {
	return (
		<div className='w-full h-full flex-center flex-col gap-7 my-48'>
			<span className='text-9xl font-bold font-montserrat'> 404 </span>

			<p className='w-[28rem] text-xl text-[#C4A484] text-center '>
				Oops! The page you're looking for seems to have gone on vacation
			</p>

			<Link to='/' className='bg-black text-white px-8 py-3 rounded-md'>Back to Home</Link>
		</div>
	)
}

export default Notfound
