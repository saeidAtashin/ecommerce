import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const productFetch = createAsyncThunk(
  "products/productFetch",
  async () => {
    const response = await axios.get(
      "https://apitest-lovat.vercel.app/products"
    );
    return response?.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
