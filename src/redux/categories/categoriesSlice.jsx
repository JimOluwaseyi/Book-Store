import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  status: "Under Construction",
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export default categoriesSlice.reducer;
