import Home from './page/Home'
import Shop from './page/Shop'
import Cart from './page/Cart'

const routes = [
	{ path: '/', element: <Home /> },
	{ path: '/shop', element: <Shop /> },
	{ path: '/cart', element: <Cart /> },
]

export default routes
