import { useRoutes } from 'react-router-dom'
import Routes from './Routes'

function App() {
	const routes = useRoutes(Routes)
	return (
		<>
			<h1>salam</h1>

			{routes}
		</>
	)
}

export default App
