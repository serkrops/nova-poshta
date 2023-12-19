export interface RootState {
  name: string;
  data: DataState;
}

export interface DataState {
  isLoading: boolean;
  isMailShow: boolean;
  ttn: TTN | null;
  history: string[] | [];
}

export interface TTN {
  Status: string | null;
  Number: string;
  WarehouseRecipient: string | null;
  WarehouseSender: string | null;
}
