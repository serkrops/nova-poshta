import { createSlice } from "@reduxjs/toolkit";
import { fetchData, fetchSearchingCities, fetchWarehouses } from "./thunks";
import { initialState } from "../constants/constants";

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
    },
    addPage: (state) => {
      state.page += 1;
    },
    refreshPage: (state) => {
      state.page = 1;
    },
    clearWarehouses: (state) => {
      state.warehouses = [];
    },
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
      })
      .addCase(fetchSearchingCities.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSearchingCities.fulfilled, (state, { payload }) => {
        if (state.page === 1) {
          state.searchingCities = payload.data;
        } else {
          state.searchingCities = state.searchingCities.concat(payload.data);
        }
        state.isLoadingCities = false;
      })
      .addCase(fetchSearchingCities.rejected, (state) => {
        state.isLoadingCities = false;
      })
      .addCase(fetchWarehouses.pending, (state) => {
        state.isLoadingWarehouses = true;
      })
      .addCase(fetchWarehouses.fulfilled, (state, { payload }) => {
        state.warehouses = payload.data;
        state.isLoadingWarehouses = false;
      })
      .addCase(fetchWarehouses.rejected, (state) => {
        state.isLoadingWarehouses = false;
      });
  },
});

export const {
  showMail,
  showDepartments,
  clearHistory,
  addPage,
  refreshPage,
  clearWarehouses,
} = dataSlice.actions;

export default dataSlice.reducer;
