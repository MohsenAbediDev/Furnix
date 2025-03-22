import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './products/productsSlice'
import cartReducer from './cart/cartSlice'
import favoriteReducer from "./favorite/favoriteSlice";

const store = configureStore({
	reducer: {
		products: productsReducer,
		cart: cartReducer,
		favorite: favoriteReducer,
	},
})

export default store
