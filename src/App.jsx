import { useRoutes } from 'react-router-dom' // Importing the hook to manage route rendering
import Routes from './Routes' // Routes configuration for the application
import Navbar from './components/Navbar' // Navigation bar component
import Footer from './components/Footer' // Footer component
import ScrollToTop from 'react-scroll-to-top' // Component to scroll the page back to the top
import ResetPageScroll from './utils/utils' // Custom utility to reset page scroll position

function App() {
	// useRoutes takes the route configuration and returns the element to render
	const routes = useRoutes(Routes)

	return (
		<div className='container mx-auto'>
			{/* Navbar at the top of the application */}
			<Navbar />
			
			<main className='mt-16'>
				{/* Render the routes for the current path */}
				{routes}

				{/* Reset the scroll position to the top on route change */}
				<ResetPageScroll />

				{/* Button to scroll back to the top of the page */}
				<ScrollToTop
					className='flex-center rounded-full bg-primary z-50'
					viewBox='0 0 24 24'
					svgPath='M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z'
					smooth
				/>
			</main>

			{/* Footer at the bottom of the application */}
			<Footer />
		</div>
	)
}

export default App
