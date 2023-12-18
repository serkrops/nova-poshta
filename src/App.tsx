import React from "react";

export const App: React.FC = () => {
  return (
    <div className="border-box p-3 flex flex-col w-full bg-slate-500/30 min-h-screen">
      <form className="flex flex-col gap-3 items-center w-2/3 md:w-3/4 md:h-full mx-auto">
        <div className="flex gap-6 justify-between p-2 bg-slate-600/40 shadow-lg shadow-gray-700/40 rounded-xl w-full">
          <button
            type="button"
            className="p-3 shadow-md shadow-red-700 w-full bg-red-400/40 text-white font-bold text-xl hover:bg-red-500/90 rounded-xl"
          >
            ТТН
          </button>
          <button
            type="button"
            className="p-3 shadow-md shadow-red-700 w-full bg-red-400/40 text-white font-bold text-xl hover:bg-red-500/90 rounded-xl"
          >
            Відділення
          </button>
        </div>
        <div className="flex flex-col gap-3 md:flex-row w-full md:max-h-[80vh]">
          <div className="flex flex-col gap-3 w-full">
            <div className="flex gap-2 p-2 w-full shadow-md shadow-gray-700/40 rounded-xl bg-slate-600/40">
              <input
                type="text"
                className="bg-red-400/40 w-full shadow-lg shadow-red-700/30 rounded-xl p-3 text-white text-xl font-bold placeholder:text-white placeholder:text-xl focus:outline-0 focus:bg-red-500/60"
                placeholder="Введіть номер ТТН"
              />
              <button
                type="submit"
                className="p-3 shadow-md shadow-red-700 bg-red-400/40 text-white font-bold text-xl hover:bg-red-500/90 rounded-xl"
              >
                🔍
              </button>
              <button
                type="button"
                className="p-3 shadow-md shadow-red-700 bg-red-400/40 text-white font-bold text-xl hover:bg-red-500/90 rounded-xl"
              >
                🗙
              </button>
            </div>
            <div className="flex flex-col justify-start items-start p-3 shadow-lg shadow-gray-700/40 rounded-xl text-white text-xl bg-slate-700/40 w-full h-[35vh] md:h-full md:min-h-[83vh] md:justify-start">
              <p>Статус:</p>
              <p>Отримали:</p>
              <p>Відправив:</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 shadow-lg shadow-gray-700/40 rounded-xl text-white text-xl bg-slate-600/40 p-2 h-  <div>[35vh] md:min-h-[90vh] pr-0">
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
        </div>
        <div className="flex flex-col gap-3 w-full h-80 md:max-h-[70vh]">
          <div className="flex gap-3 shadow-md shadow-gray-700/40 rounded-xl bg-slate-600/40 p-2 w-full">
            <input
              type="text"
              className="bg-red-400/40 w-full shadow-lg shadow-red-700/30 rounded-xl p-3 text-white text-xl font-bold placeholder:text-white placeholder:text-xl focus:outline-0 focus:bg-red-500/60"
            />
            <button
              type="button"
              className="p-3 shadow-md shadow-red-700 bg-red-400/40 text-white font-bold text-xl hover:bg-red-500/90 rounded-xl"
            >
              🗙
            </button>
          </div>
          <div className="flex flex-col gap-3 w-full md:flex-row md:h-screen">
            <div
              id="citiesListContaiter"
              className="flex flex-col gap-3 justify-start items-start shadow-lg shadow-gray-700/40 rounded-xl text-white text-xl bg-slate-700/40 p-3 w-full md:justify-start overflow-y-scroll overflow-x-hidden h-[35vh] md:min-h-[83vh]"
            >
              <p className="text-xl cursor-pointer shadow-lg shadow-gray-700/40 rounded-xl w-full p-3 hover:bg-slate-600/20">
                Cities
              </p>
            </div>
            <div className="flex flex-col gap-3 justify-start items-start shadow-lg shadow-gray-700/40 rounded-xl text-white text-xl bg-slate-700/40 p-3 w-full md:justify-start overflow-y-scroll overflow-x-hidden h-[35vh] md:min-h-[83vh]">
              <p className="p-3 text-left shadow-lg shadow-gray-700/40 rounded-xl w-full hover:cursor-default">
                Warehouses
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
