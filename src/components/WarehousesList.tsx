import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../types/types";
import Loader from "./Loader";

const WarehousesList: React.FC = () => {
  const { warehouses, isLoadingWarehouses } = useSelector(
    (state: RootState) => state.data
  );

  return (
    <div className="flex flex-col gap-3 justify-start items-start shadow-lg shadow-gray-700/40 rounded-xl text-white text-xl bg-slate-700/40 p-3 w-full md:justify-start overflow-y-scroll overflow-x-hidden h-[35vh] md:min-h-[80vh]">
      {!isLoadingWarehouses ? (
        warehouses &&
        warehouses.map((warehouse, index) => (
          <p
            key={index}
            className="p-3 text-left shadow-lg shadow-gray-700/40 rounded-xl w-full hover:cursor-default"
          >
            {warehouse.Description}
          </p>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default WarehousesList;
