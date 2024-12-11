import { useRoutes } from 'react-router-dom'
import Routes from './Routes'
import Navbar from './components/Navbar'

function App() {
	const routes = useRoutes(Routes)
	return (
		<>
			<Navbar />

			{routes}
		</>
	)
}

export default App
