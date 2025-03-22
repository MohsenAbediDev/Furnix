import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	favorites: JSON.parse(localStorage.getItem('favorite')) || [],
}

const favoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		toggleFavorite: (state, action) => {
			const product = action.payload
			const exists = state.favorites.some((item) => item.id === product.id)

			if (exists) {
				state.favorites = state.favorites.filter(
					(item) => item.id !== product.id
				)
			} else {
				state.favorites.push(product)
			}

			// Set item to localstorage
			localStorage.setItem('favorite', JSON.stringify(state.favorites))
		},
	},
})

export const { toggleFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer
