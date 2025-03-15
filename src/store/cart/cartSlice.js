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
		addToCart: (state, action) => {
			const existingItem = state.items.find(
				(item) => item.id === action.payload.id
			)

			if (existingItem) {
				existingItem.quantity += 1
			} else {
				state.items.push({ ...action.payload, quantity: 1 })
			}

			// Update localStorage after each cart change
			localStorage.setItem('cart', JSON.stringify(state.items))
		},
	},
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
