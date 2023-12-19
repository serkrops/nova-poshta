import { useSelector } from "react-redux";
import { City, RootState } from "../types/types";

const CitiesList: React.FC = () => {
  const { searchingCities } = useSelector((state: RootState) => state.data);
 
  return (
    <div
      id="citiesListContaiter"
      className="flex flex-col gap-3 justify-start items-start shadow-lg shadow-gray-700/40 rounded-xl text-white text-xl bg-slate-700/40 p-3 w-full md:justify-start overflow-y-scroll overflow-x-hidden h-[35vh] md:min-h-[83vh]"
    >
      {searchingCities &&
        searchingCities.map((city: City, index: number) => (
          <p
            key={index}
            className="text-xl cursor-pointer shadow-lg shadow-gray-700/40 rounded-xl w-full p-3 hover:bg-slate-600/20"
          >
            {city.Description}
          </p>
        ))}
    </div>
  );
};

export default CitiesList;
