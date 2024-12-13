import Home from './page/Home'
import Shop from './page/Shop'
import Product from './page/Product'

const routes = [
	{ path: '/', element: <Home /> },
	{ path: '/shop', element: <Shop /> },
	{path: '/product/:id' , element: <Product/>}
]

export default routes
