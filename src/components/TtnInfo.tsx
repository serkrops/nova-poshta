import React from "react";

const TtnInfo: React.FC = () => {
  return (
    <div className="flex flex-col justify-start items-start p-3 shadow-lg shadow-gray-700/40 rounded-xl text-white text-xl bg-slate-700/40 w-full h-[35vh] md:h-full md:min-h-[83vh] md:justify-start">
      <p>Статус:</p>
      <p>Отримали:</p>
      <p>Відправив:</p>
    </div>
  );
};

export default TtnInfo;
