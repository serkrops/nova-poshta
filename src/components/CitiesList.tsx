import { useDispatch, useSelector } from "react-redux";
import { City, RootState } from "../types/types";
import { useEffect } from "react";
import { addPage } from "../store/dataSlice";
import { fetchWarehouses } from "../store/thunks";
import { UnknownAction } from "redux";

const CitiesList: React.FC = () => {
  const dispatch = useDispatch();
  const { searchingCities } = useSelector((state: RootState) => state.data);

  const handleShowWarehouses = (item: City) => {
    dispatch(fetchWarehouses(item.Ref) as unknown as UnknownAction);
  };

  useEffect(() => {
    const citiesListContaiter = document.getElementById("citiesListContaiter");

    const scrollHandler = () => {
      const newFetch =
        citiesListContaiter.clientHeight + citiesListContaiter.scrollTop >=
        citiesListContaiter.scrollHeight - 30;

      if (newFetch) {
        dispatch(addPage());
      }
    };

    citiesListContaiter.addEventListener("scroll", scrollHandler);

    return function () {
      citiesListContaiter.removeEventListener("scroll", scrollHandler);
    };
  }, [dispatch]);

  return (
    <div
      id="citiesListContaiter"
      className="flex flex-col gap-3 justify-start items-start shadow-lg shadow-gray-700/40 rounded-xl text-white text-xl bg-slate-700/40 p-3 w-full md:justify-start overflow-y-scroll overflow-x-hidden h-[35vh] md:min-h-[80vh]"
    >
      {searchingCities &&
        searchingCities.map((city: City, index: number) => (
          <p
            key={index}
            className="text-xl cursor-pointer shadow-lg shadow-gray-700/40 rounded-xl w-full p-3 hover:bg-slate-600/20"
            onClick={() => handleShowWarehouses(city)}
          >
            {city.Description}
          </p>
        ))}
    </div>
  );
};

export default CitiesList;
