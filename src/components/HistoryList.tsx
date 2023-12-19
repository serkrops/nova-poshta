import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../types/types";
import Loader from "./Loader";
import { toast } from "react-toastify";
import { clearHistory } from "../store/dataSlice";
import { fetchData } from "../store/thunks";
import { UnknownAction } from "redux";

type Props = {
  setDocumentNumber: React.Dispatch<React.SetStateAction<string>>;
};

const HistoryList: React.FC<Props> = ({ setDocumentNumber }) => {
  const dispatch = useDispatch();
  const { history } = useSelector((state: RootState) => state.data);

  const handleShowSavedTtn = (ttn: string) => {
    dispatch(fetchData(ttn) as unknown as UnknownAction);
    setDocumentNumber(ttn);
  };

  const handleClearHistory = () => {
    toast("✔️ Історію видалено");
    localStorage.clear();
    dispatch(clearHistory());
  };

  return (
    <div className="flex flex-col items-center gap-6 shadow-lg shadow-gray-700/40 rounded-xl text-white text-xl bg-slate-600/40 p-2 h-[35vh] w-full md:min-h-[90vh] pr-0 md:w-1/3">
      <div className="flex flex-col gap-3 md:flex-row w-full pr-2">
        <p className="p-3 text-center font-bold shadow-lg shadow-gray-700/40 rounded-xl w-full hover:cursor-default">
          Історія
        </p>
        <button
          type="button"
          className="w-full p-2 shadow-md shadow-red-700 bg-red-400/40 text-white font-bold text-xl hover:bg-red-500/90 rounded-xl"
          onClick={handleClearHistory}
        >
          🗑️
        </button>
      </div>
      <div className="flex flex-col gap-3 w-full h-full md:min-h-[70vh] overflow-y-scroll p-2">
        {history ? (
          history.map((item: string, index: number) => (
            <h1
              key={index}
              className="text-xl font-bold cursor-pointer shadow-lg shadow-gray-700/40 rounded-xl w-full text-center p-2 hover:bg-slate-600/20"
              onClick={() => handleShowSavedTtn(item)}
            >
              {item}
            </h1>
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default HistoryList;
