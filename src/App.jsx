import { useEffect } from 'react'
import { useRoutes } from 'react-router-dom' // Importing the hook to manage route rendering
import { useDispatch } from 'react-redux'
import { addToCart } from './store/cart/cartSlice'
import ScrollToTop from 'react-scroll-to-top' // Component to scroll the page back to the top
import ResetPageScroll from './utils/utils' // Custom utility to reset page scroll position
import Routes from './Routes' // Routes configuration for the application
import Navbar from './components/Navbar' // Navigation bar component
import Footer from './components/Footer' // Footer component

function App() {
	const dispatch = useDispatch()

	// useRoutes takes the route configuration and returns the element to render
	const routes = useRoutes(Routes)

	// Load cart items from localStorage and dispatch them to Redux on initial render
	useEffect(() => {
		const storedItems = JSON.parse(localStorage.getItem('cart')) || [] // Retrieve stored cart items
		storedItems.forEach((item) => dispatch(addToCart(item))) // Add each item to the Redux store
	}, [dispatch])

	return (
		<>
			{/* Navbar at the top of the application */}
			<Navbar />

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

			{/* Footer at the bottom of the application */}
			<Footer />
		</>
	)
}

export default App
