import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
  "data/fetchData",
  async (documentNumber: string) => {
    try {
      const response = await axios.post(
        "https://api.novaposhta.ua/v2.0/json/",
        {
          apiKey: "404109fd03ac21ede6f6690a7103817c",
          modelName: "TrackingDocument",
          calledMethod: "getStatusDocuments",
          methodProperties: {
            Documents: [
              {
                DocumentNumber: documentNumber,
              },
            ],
          },
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const fetchSearchingCities = createAsyncThunk(
  "data/fetchSearchingCities",
  async ({ page, searchCity }: { page: number; searchCity: string }) => {
    try {
      const response = await axios.post(
        "https://api.novaposhta.ua/v2.0/json/",
        {
          apiKey: "404109fd03ac21ede6f6690a7103817c",
          modelName: "Address",
          calledMethod: "getCities",
          methodProperties: {
            Page: page,
            FindByString: searchCity.trim(),
            Limit: "20",
          },
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const fetchWarehouses = createAsyncThunk(
  "data/fetchWarehouse",
  async (ref: string) => {
    try {
      const response = await axios.post(
        "https://api.novaposhta.ua/v2.0/json/",
        {
          apiKey: "404109fd03ac21ede6f6690a7103817c",
          modelName: "Address",
          calledMethod: "getWarehouses",
          methodProperties: {
            CityRef: ref,
          },
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);
