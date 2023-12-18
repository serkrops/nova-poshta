import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showDepartments, showMail } from "../store/dataSlice";
import { RootState } from "../types/types";

const MainButtons: React.FC = () => {
  const dispatch = useDispatch();
  const { isMailShow } = useSelector((state: RootState) => state.data);

  const handleShowDepartments = () => {
    dispatch(showDepartments());
    console.log(isMailShow);
  };

  const handleShowMail = () => {
    dispatch(showMail());
    console.log(isMailShow);
  };

  return (
    <div className="flex gap-6 justify-between p-2 bg-slate-600/40 shadow-lg shadow-gray-700/40 rounded-xl w-full">
      <button
        type="button"
        className={`p-3 shadow-md shadow-red-700 w-full bg-red-400/40 text-white font-bold text-xl hover:bg-red-500/90 rounded-xl ${
          isMailShow && "bg-red-500/90"
        }`}
        onClick={handleShowMail}
      >
        ТТН
      </button>
      <button
        type="button"
        className={`p-3 shadow-md shadow-red-700 w-full bg-red-400/40 text-white font-bold text-xl hover:bg-red-500/90 rounded-xl ${
          !isMailShow && "bg-red-500/90"
        }`}
        onClick={handleShowDepartments}
      >
        Відділення
      </button>
    </div>
  );
};

export default MainButtons;
