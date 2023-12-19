export interface RootState {
  name: string;
  data: DataState;
}

export interface DataState {
  isLoading: boolean;
  isLoadingCities: boolean;
  isLoadingWarehouses: boolean;
  isMailShow: boolean;
  ttn: TTN | null;
  history: string[] | [];
  page: number;
  searchingCities: City[] | [];
  warehouses: Warehouses[] | [];
}

export interface TTN {
  Status: string | null;
  Number: string;
  WarehouseRecipient: string | null;
  WarehouseSender: string | null;
}

export interface City {
  Description: string;
  Ref: string;
}

export interface Warehouses {
  Description: string;
}
