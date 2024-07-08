import React from "react";

interface CardWidgetProps {
  title: string;
  data: string;
  handleOnClick: () => void;
}

const CardWidget = ({ title, data, handleOnClick }: CardWidgetProps) => {
  return (
    <div className="w-60 rounded-lg border border-gray-300 p-4 shadow-md bg-white">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="my-2 text-lg text-gray-700">{data}</p>
      <button
        className="mt-2 w-full bg-indigo-600 text-white py-2 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={handleOnClick}
      >
        Refresh
      </button>
    </div>
  );
};

export default React.memo(CardWidget);
