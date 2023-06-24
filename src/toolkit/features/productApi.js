import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://apitest-lovat.vercel.app" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
    getAllProducts2: builder.query({
      query: () => "handicrafts",
    }),
    getProductsById: builder.query({
      query: (id) => `products/${id}`,
    }),
    gethandcraftproducts: builder.query({
      query: () => "handicrafts",
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductsByIdQuery,
  useGetAllProducts2Query,
  useGethandcraftproductsQuery,
} = productApi;
