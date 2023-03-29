import React from "react";

const WeatherBox = ({ data }) => {
  return (
    <section>
      <div>
        <p>{data.name}</p>
        <img src="" alt="" />
        <div
          className="flex
        "
        >
          <p className="text-6xl">
            {Math.round((data.main.temp - 273.15) * 10) / 10}
          </p>
          <p className="text-2xl font-bold">°C</p>
        </div>
        <p>{data.weather[0].main}</p>
      </div>
      <div></div>
    </section>
  );
};

export default WeatherBox;
