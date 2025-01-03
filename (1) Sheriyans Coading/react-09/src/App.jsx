import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=10"
    );
    // const data = response.data
    // console.log(data);
    setData(response.data);
    console.log(data); // upar wala data hai useState me likha hai
  };

  return (
    <div className="p-10">
      <button
        onClick={getData}
        className="bg-teal-500 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90 ml-96"
      >
        Get Data
      </button>

      <div className=" p-5 mt-5  bg-gray-950">
        {data.map(function (elem, index) {
          return (
            <div
              key={index}
              className="bg-gray-50 text-black flex items-center justify-between w-full p-6 mb-3 rounded"
            >
              <img className="h-60 rounded" src={elem.download_url} alt="" />
              <h1>{elem.author}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
