import { useEffect, useRef } from "react";
import CitiesList from "./CitiesList";
import WarehousesList from "./WarehousesList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../types/types";
import { clearWarehouses } from "../store/dataSlice";

type Props = {
  setSearchCity: React.Dispatch<React.SetStateAction<string>>;
  searchCity: string;
};

const Departments: React.FC<Props> = ({ setSearchCity, searchCity }) => {
  const dispatch = useDispatch();
  const { isMailShow } = useSelector((state: RootState) => state.data);
  const cityInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isMailShow) {
      cityInputRef.current?.focus();
    }
  }, [isMailShow]);

  const handleInputClear = () => {
    setSearchCity("");
    dispatch(clearWarehouses());
  };

  return (
    <div className="flex flex-col gap-3 w-full h-80 md:max-h-[70vh]">
      <div className="flex gap-3 shadow-md shadow-gray-700/40 rounded-xl bg-slate-600/40 p-2 w-full">
        <input
          ref={cityInputRef}
          type="text"
          className="bg-red-400/40 w-full shadow-lg shadow-red-700/30 rounded-xl p-3 text-white text-xl font-bold placeholder:text-white placeholder:text-xl focus:outline-0 focus:bg-red-500/60"
          placeholder="Введіть назву міста"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
        />
        <button
          type="button"
          className="p-3 shadow-md shadow-red-700 bg-red-400/40 text-white font-bold text-xl hover:bg-red-500/90 rounded-xl"
          onClick={handleInputClear}
        >
          🗙
        </button>
      </div>
      <div className="flex flex-col gap-3 w-full md:flex-row md:h-screen">
        <CitiesList />
        <WarehousesList />
      </div>
    </div>
  );
};

export default Departments;
