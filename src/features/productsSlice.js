import { createAsyncThunk,createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const baseURL = "http://localhost:5000/api/product";

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get(baseURL)
    return response.data
  }
)
export const addProduct = createAsyncThunk(
  'products/addProducts',
  async () => {
    const response = await axios.post(`${baseURL}/product/add`)
    return response.data
  }
)



export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    status: null

  },
  reducers: {

  },
  extraReducers: (builder) => {
    
    builder.addCase(fetchProducts.fulfilled, (state, {payload}) => {
      state.data = payload;
      state.status = "success";
    })
    builder.addCase(fetchProducts.pending,(state)=>{
      state.status = "looding";
    })
    builder.addCase(fetchProducts.rejected,(state)=>{
      state.status = "failed";
    })
  },


})


// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default productsSlice.reducer