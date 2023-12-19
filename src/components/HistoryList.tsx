import React from "react";

const HistoryList: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-6 shadow-lg shadow-gray-700/40 rounded-xl text-white text-xl bg-slate-600/40 p-2 h-[35vh] md:min-h-[90vh] pr-0 w-1/3">
      <div className="flex flex-col gap-3 md:flex-row w-full pr-2">
        <p className="p-3 text-center font-bold shadow-lg shadow-gray-700/40 rounded-xl w-full hover:cursor-default">
          Історія
        </p>
        <button
          type="button"
          className="w-full p-2 shadow-md shadow-red-700 bg-red-400/40 text-white font-bold text-xl hover:bg-red-500/90 rounded-xl"
        >
          🗑️
        </button>
      </div>
      <div className="flex flex-col gap-3 w-full h-full md:min-h-[70vh] overflow-y-scroll p-2">
        <h1 className="text-xl font-bold cursor-pointer shadow-lg shadow-gray-700/40 rounded-xl w-full text-center p-2 hover:bg-slate-600/20">
          TTN
        </h1>
      </div>
    </div>
  );
};

export default HistoryList;
