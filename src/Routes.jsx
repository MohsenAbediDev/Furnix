import Home from './page/Home'
import Shop from './page/Shop'
import Cart from './page/Cart'
import Product from './page/Product'
import Favorite from './page/Favorite'
import Notfound from './page/Notfound'

const routes = [
	{ path: '/', element: <Home /> },
	{ path: '/shop', element: <Shop /> },
	{ path: '/cart', element: <Cart /> },
	{ path: '/favorite', element: <Favorite /> },
	{path: '/product/:id' , element: <Product/>},
	{path: '/*' , element: <Notfound/>}
]

export default routes
