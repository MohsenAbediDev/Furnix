import { useRoutes } from 'react-router-dom'
import Routes from './Routes'

function App() {
	const routes = useRoutes(Routes)
	return (
		<>
			{routes}
		</>
	)
}

export default App
