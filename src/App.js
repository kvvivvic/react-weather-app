import { useState } from "react";
import axios from "axios";

function App() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
  const handleChange = (e) => {
    setLocation(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.get(url).then((res) => res.data);
    setData(data);
  };
  return (
    <div className="w-96 mx-auto ">
      <form onSubmit={handleSubmit}>
        <input
          className="border border-red-500"
          type="text"
          value={location}
          onChange={handleChange}
        />
        <button>click</button>
      </form>
      {Object.keys(data).length !== 0 && (
        <div>
          <div>{data.name}</div>
          <div>{Math.round((data.main.temp - 273.15) * 10) / 10}</div>
          <div>{data.weather[0].description}</div>
          <div>{data.weather[0].main}</div>
        </div>
      )}
    </div>
  );
}

export default App;
