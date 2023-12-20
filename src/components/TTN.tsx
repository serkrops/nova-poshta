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

  const checkTtnValidation = (ttn: string) => {
    return ttn.split("").every((item) => !isNaN(+item));
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (
      documentNumber.toString().length !== 14 ||
      !checkTtnValidation(documentNumber)
    ) {
      toast("❗ Введіть номер ТТН довжиною 14 цифр у форматі: 00000000000000");
    } else {
      dispatch(
        fetchData(documentNumber.toString()) as unknown as UnknownAction
      );
    }
  };

  const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDocumentNumber(e.target.value);
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
    <div className="flex flex-col gap-3 md:flex-row w-full">
      <div className="flex flex-col gap-3 w-full">
        <div className="flex gap-2 p-2 w-full shadow-md shadow-gray-700/40 rounded-xl bg-slate-600/40">
          <input
            ref={ttnInputRef}
            type="text"
            className="bg-red-400/40 w-full shadow-lg shadow-red-700/30 rounded-xl p-3 text-white text-xl font-bold placeholder:text-white placeholder:text-xl focus:outline-0 focus:bg-red-500/60"
            placeholder="Введіть ТТН"
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
            ❌
          </button>
        </div>
        <div className="flex gap-3 flex-col md:flex-row md:max-h-[80vh]">
          <TtnInfo ttn={ttn} />
          <HistoryList setDocumentNumber={setDocumentNumber} />
        </div>
      </div>
    </div>
  );
};

export default TTN;
