import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  API_KEY,
  API_METHOD_NAME,
  API_MODEL_NAME,
  API_URL,
  ASYNC_THUNKS,
  LIMIT,
} from "../constants/constants";

export const fetchData = createAsyncThunk(
  ASYNC_THUNKS.fetchData,
  async (documentNumber: string) => {
    try {
      const response = await axios.post(API_URL, {
        apiKey: API_KEY,
        modelName: API_MODEL_NAME.TrackingDocument,
        calledMethod: API_METHOD_NAME.getStatusDocuments,
        methodProperties: {
          Documents: [
            {
              DocumentNumber: documentNumber,
            },
          ],
        },
      });

      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const fetchSearchingCities = createAsyncThunk(
  ASYNC_THUNKS.fetchSearchingCities,
  async ({ page, searchCity }: { page: number; searchCity: string }) => {
    try {
      const response = await axios.post(API_URL, {
        apiKey: API_KEY,
        modelName: API_MODEL_NAME.Address,
        calledMethod: API_METHOD_NAME.getCities,
        methodProperties: {
          Page: page,
          FindByString: searchCity.trim(),
          Limit: LIMIT,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const fetchWarehouses = createAsyncThunk(
  ASYNC_THUNKS.fetchWarehouses,
  async (ref: string) => {
    try {
      const response = await axios.post(API_URL, {
        apiKey: API_KEY,
        modelName: API_MODEL_NAME.Address,
        calledMethod: API_METHOD_NAME.getWarehouses,
        methodProperties: {
          CityRef: ref,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);
