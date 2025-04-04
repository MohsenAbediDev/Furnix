import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// Get Products From Server
export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async () => {
		const response = await axios.get('https://projects-server-4s3m.onrender.com/furniro-products') //Change to http://localhost:3000/products for use json-server 
		return response.data
	}
)

const productsSlice = createSlice({
	name: 'products',
	initialState: {
		items: [],
		loading: false,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.loading = true
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.loading = false
				state.items = action.payload
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message
			})
	},
})

export default productsSlice.reducer
