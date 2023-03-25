import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { url } from "../../App";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  favorites: [],
  size: [],
};

export const getLenses = createAsyncThunk(
  "products/getLenses",
  async (query = "") => {
    console.log(query, "query");
    console.log(url, "url");
    try {
      const lenses = await fetch(`${url}${query}`);
      const data = await lenses.json();
      console.log(data, "data");
      return data;
    } catch (error) {
      console.log("Error while fetching lenses\n", error);
    }
  }
);

const products = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLenses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLenses.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
        state.isError = false;
        let shapes = action.payload.map((elem) => elem.size);
        shapes = new Set(shapes);
        shapes = [...shapes];
        state.size = shapes;
      })
      .addCase(getLenses.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = false;
      });
  },
});

export const productReducer = products.reducer;
