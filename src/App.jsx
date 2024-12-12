import { useRoutes } from 'react-router-dom'
import Routes from './Routes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
	const routes = useRoutes(Routes)
	return (
		<>
			<Navbar />

			{routes}

			<Footer />
		</>
	)
}

export default App
