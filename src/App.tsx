import React, { useEffect, useState } from "react";
import MainButtons from "./components/MainButtons";
import TTN from "./components/TTN";
import Departments from "./components/Departments";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./types/types";
import { ToastContainer } from "react-toastify";
import { fetchSearchingCities } from "./store/thunks";
import { UnknownAction } from "redux";
import { refreshPage } from "./store/dataSlice";

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const [searchCity, setSearchCity] = useState<string>("");

  const { isMailShow, page } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    const timerId = setTimeout(() => {
      dispatch(
        fetchSearchingCities({
          page,
          searchCity,
        }) as unknown as UnknownAction
      );
    }, 300);    

    return () => clearTimeout(timerId);
  }, [dispatch, page, searchCity]);

  useEffect(() => {
    dispatch(refreshPage());
  }, [dispatch, searchCity]);

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
        {isMailShow ? (
          <TTN />
        ) : (
          <Departments setSearchCity={setSearchCity} searchCity={searchCity} />
        )}
      </form>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};
