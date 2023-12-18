import HistoryList from "./HistoryList";
import TtnInfo from "./TtnInfo";

const TTN: React.FC = () => {
  return (
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
        <TtnInfo />
      </div>
      <HistoryList />
    </div>
  );
};

export default TTN;
