import { createSlice } from '@reduxjs/toolkit'

// Load initial state from localStorage
const initialState = {
	items: JSON.parse(localStorage.getItem('cart')) || [],
	loading: false,
	error: null,
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		// Add product to cart
		addToCart: (state, action) => {
			const existingItem = state.items.find(
				(item) => item.id === action.payload.id
			)

			if (existingItem) {
				existingItem.quantity = action.payload.quantity
			} else {
				state.items.push({ ...action.payload })
			}

			// Update localStorage after each cart change
			localStorage.setItem('cart', JSON.stringify(state.items))
		},

		// Remove product from cart
		removeProduct: (state, action) => {
			state.items = state.items.filter((item) => item.id !== action.payload)

			// Update localStorage after state change
			localStorage.setItem('cart', JSON.stringify(state.items))
		},

		// Clear products from cart
		clearCart: (state, action) => {
			state.items = []

			// Update localStorage after state change
			localStorage.setItem('cart', JSON.stringify(state.items))
		},

		updateQuantity: (state, action) => {
			const product = state.items.find((item) => item.id === action.payload.id)
			if (product) {
				product.quantity = action.payload.quantity
			}
		},
	},
})

export const { addToCart, removeProduct, clearCart, updateQuantity } = cartSlice.actions
export default cartSlice.reducer
