import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./thunks";
import { DataState } from "../types/types";

const initialState: DataState = {
  isLoading: false,
  isMailShow: true,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    showMail: (state) => {
      state.isMailShow = true;
    },
    showDepartments: (state) => {
      state.isMailShow = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { showMail, showDepartments } = dataSlice.actions;

export default dataSlice.reducer;
