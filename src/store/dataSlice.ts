import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./thunks";
import { DataState } from "../types/types";

const initialState: DataState = {
  isLoading: false,
  isMailShow: true,
  ttn: null,
  history: localStorage.getItem("savedData")
    ? JSON.parse(localStorage.getItem("savedData") || "null")
    : [],
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
    clearHistory: (state) => {
      state.history = [];
      localStorage.removeItem("savedData");
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, { payload }) => {
        if (payload.data.length) {
          state.ttn = payload.data[0];
          if (!state.history.includes(payload.data[0].Number as never)) {
            state.history = [payload.data[0].Number, ...state.history];
            localStorage.setItem("savedData", JSON.stringify(state.history));
          }

          state.isLoading = false;
        }
      })
      .addCase(fetchData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { showMail, showDepartments, clearHistory } = dataSlice.actions;

export default dataSlice.reducer;
