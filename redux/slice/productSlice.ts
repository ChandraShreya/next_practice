import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [{}] as any[],
};

export const productList = createAsyncThunk("productList", async () => {
  const response = await axios.get("https://dummyjson.com/products");
  return response.data;
});

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(productList.pending, (state, { payload }) => {})
      .addCase(productList.fulfilled, (state, { payload }) => {
        state.data = payload.data;
      })
      .addCase(productList.rejected, (state, { payload }) => {});
  },
});

export default productSlice;

