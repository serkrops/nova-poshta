import { DataState } from "../types/types";

export const API_KEY = "404109fd03ac21ede6f6690a7103817c";
export const API_URL = "https://api.novaposhta.ua/v2.0/json/";
export const LIMIT = 20;
export enum API_MODEL_NAME {
  Address = "Address",
  TrackingDocument = "TrackingDocument",
}
export enum API_METHOD_NAME {
  getCities = "getCities",
  getWarehouses = "getWarehouses",
  getStatusDocuments = "getStatusDocuments",
}
export enum ASYNC_THUNKS {
  fetchData = "data/fetchData",
  fetchSearchingCities = "data/fetchSearchingCities",
  fetchWarehouses = "data/fetchWarehouse",
}

export const initialState: DataState = {
  isLoading: false,
  isLoadingCities: false,
  isLoadingWarehouses: false,
  isMailShow: true,
  ttn: null,
  history: localStorage.getItem("savedData")
    ? JSON.parse(localStorage.getItem("savedData") || "null")
    : [],
  page: 1,
  searchingCities: [],
  warehouses: [],
};
