import { useRoutes } from 'react-router-dom'
import ScrollToTop from 'react-scroll-to-top'
import ResetPageScroll from './utils/utils'
import Routes from './Routes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
	const routes = useRoutes(Routes)
	return (
		<>
			<Navbar />

			{routes}

			<ResetPageScroll />
			
			<ScrollToTop
				className='flex-center rounded-full bg-primary'
				viewBox='0 0 24 24'
				svgPath='M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z'
				smooth
			/>

			<Footer />
		</>
	)
}

export default App
