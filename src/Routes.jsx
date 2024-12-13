import Home from './page/Home'
import Shop from './page/Shop'
import Cart from './page/Cart'
import Product from './page/Product'

const routes = [
	{ path: '/', element: <Home /> },
	{ path: '/shop', element: <Shop /> },
	{ path: '/cart', element: <Cart /> },
	{path: '/product/:id' , element: <Product/>}
]

export default routes
