import { useDispatch, useSelector } from "react-redux";
import { City, RootState } from "../types/types";
import { fetchWarehouses } from "../store/thunks";
import { UnknownAction } from "redux";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { addPage } from "../store/dataSlice";

const CitiesList: React.FC = () => {
  const dispatch = useDispatch();
  const { searchingCities } = useSelector((state: RootState) => state.data);

  const { ref: containerBottom, inView } = useInView();

  const handleShowWarehouses = (item: City) => {
    dispatch(fetchWarehouses(item.Ref) as unknown as UnknownAction);
  };

  useEffect(() => {
    if (inView) {
      dispatch(addPage());
    }
  }, [dispatch, inView]);

  return (
    <div className="flex flex-col gap-3 justify-start items-start shadow-lg shadow-gray-700/40 rounded-xl text-white text-xl bg-slate-700/40 p-3 w-full md:justify-start overflow-y-scroll overflow-x-hidden h-[35vh] md:min-h-[80vh]">
      {searchingCities?.map((city: City, index: number) => (
        <p
          key={index}
          className="text-xl cursor-pointer shadow-lg shadow-gray-700/40 rounded-xl w-full p-3 hover:bg-slate-600/20"
          onClick={() => handleShowWarehouses(city)}
        >
          {city.Description}
        </p>
      ))}
      <span ref={containerBottom}></span>
    </div>
  );
};

export default CitiesList;
