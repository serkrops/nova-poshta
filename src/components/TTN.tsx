import { useEffect, useRef, useState } from "react";
import HistoryList from "./HistoryList";
import TtnInfo from "./TtnInfo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../types/types";
import { fetchData } from "../store/thunks";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UnknownAction } from "@reduxjs/toolkit";

const TTN: React.FC = () => {
  const dispatch = useDispatch();

  const [documentNumber, setDocumentNumber] = useState<string>("");
  const { ttn, isMailShow } = useSelector((state: RootState) => state.data);
  const ttnInputRef = useRef<HTMLInputElement>(null);

  const handleOnSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (documentNumber.toString().length !== 14) {
      toast("❗❗❗ Не вірний ТТН ❗❗❗");
    } else {
      dispatch(
        fetchData(documentNumber.toString()) as unknown as UnknownAction
      );
    }
  };

  const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (isNaN(+value)) {
      toast("❗ Введіть номер ТТН ❗");
    } else {
      setDocumentNumber(value);
    }
  };

  const handleOnInputClear = () => {
    setDocumentNumber("");
  };

  useEffect(() => {
    if (isMailShow) {
      ttnInputRef.current?.focus();
    }
  }, [isMailShow]);

  return (
    <div className="flex flex-col gap-3 md:flex-row w-full md:max-h-[80vh]">
      <div className="flex flex-col gap-3 w-full md:w-2/3">
        <div className="flex gap-2 p-2 w-full shadow-md shadow-gray-700/40 rounded-xl bg-slate-600/40">
          <input
            ref={ttnInputRef}
            type="text"
            className="bg-red-400/40 w-full shadow-lg shadow-red-700/30 rounded-xl p-3 text-white text-xl font-bold placeholder:text-white placeholder:text-xl focus:outline-0 focus:bg-red-500/60"
            placeholder="Введіть номер ТТН"
            value={documentNumber}
            onChange={handleOnInputChange}
          />
          <button
            type="submit"
            className="p-3 shadow-md shadow-red-700 bg-red-400/40 text-white font-bold text-xl hover:bg-red-500/90 rounded-xl"
            onClick={handleOnSubmit}
          >
            🔍
          </button>
          <button
            type="button"
            className="p-3 shadow-md shadow-red-700 bg-red-400/40 text-white font-bold text-xl hover:bg-red-500/90 rounded-xl"
            onClick={handleOnInputClear}
          >
            🗙
          </button>
        </div>
        <TtnInfo ttn={ttn} />
      </div>
      <HistoryList setDocumentNumber={setDocumentNumber} />
    </div>
  );
};

export default TTN;
