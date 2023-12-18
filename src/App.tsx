import React from "react";
import MainButtons from "./components/MainButtons";
import TTN from "./components/TTN";
import Departments from "./components/Departments";
import { useSelector } from "react-redux";
import { RootState } from "./types/types";

export const App: React.FC = () => {
  const { isMailShow } = useSelector((state: RootState) => state.data);
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="border-box p-3 flex flex-col w-full bg-slate-500/30 min-h-screen">
      <form
        className="flex flex-col gap-3 items-center w-2/3 md:w-3/4 md:h-full mx-auto"
        onSubmit={handleOnSubmit}
      >
        <MainButtons />
        {isMailShow ? <TTN /> : <Departments />}
      </form>
    </div>
  );
};
