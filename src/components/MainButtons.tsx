import React from "react";

const MainButtons = () => {
  return (
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
  );
};

export default MainButtons;
