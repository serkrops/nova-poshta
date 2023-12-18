import React from "react";
import { TTN } from "../types/types";

type Props = {
  ttn: TTN;
};

const TtnInfo: React.FC<Props> = ({ ttn }) => {
  return (
    <div className="flex flex-col justify-start items-start p-3 shadow-lg shadow-gray-700/40 rounded-xl text-white text-xl bg-slate-700/40 w-full h-[35vh] md:h-full md:min-h-[83vh] md:justify-start">
      <p>{`Статус: ${ttn?.Status ? ttn.Status : "Не відомо"}`} </p>
      <p>{`Отримали: ${
        ttn?.WarehouseRecipient ? ttn.WarehouseRecipient : "Не відомо"
      }`}</p>
      <p>{`Відправив: ${
        ttn?.WarehouseSender ? ttn.WarehouseSender : "Не відомо"
      }`}</p>
    </div>
  );
};

export default TtnInfo;
