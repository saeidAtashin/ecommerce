import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProduct = createAsyncThunk(
  "products/getproduct",
  async ({ id }) => {
    return fetch("http://localhost:8000/products/").then((res) =>  {
       const userlist = res.json()
    });
  }
);

const initialState = {
  loading: true,
  value: 0,
  userlist: [],
  userobj: {},
  errmessage: "",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state ,action) => {
      state.value += 1;
      state.loading = false;
      state.userlist.push = "userlist";
    },

    [getProduct.pending]: (state, action) => {
      state.loading = true;
    },

    [getProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.userlist = [action.payload];
    },

    [getProduct.rejected]: (state, action) => {
      state.loading = false;
      state.errmessage = action.payload;
    },

    faileRequest: (state, action) => {
      state.loading = false;
      state.errmessage = action.payload;
    },
    getUserRequest: (state, action) => {
      state.loading = false;
      state.errmessage = "";
      state.userlist = action.payload;
      state.userobj = {};
    },
    decrement: (state) => {
      state.value -= 1;
    },
    numIncrement: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, numIncrement, makeRequest, faileRequest } =
  counterSlice.actions;
export default counterSlice.reducer;
