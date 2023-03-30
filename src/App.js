import { useState } from "react";
import axios from "axios";
import WeatherBox from "./component/WeatherBox/WeatherBox";
import { MdLocationOn } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

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
    <div className="container">
      <form onSubmit={handleSubmit} className="flex items-center justify-around">
        <MdLocationOn className="text-3xl " />
        <input className="w-48 border-none outline-none font-font" type="text" value={location} onChange={handleChange} placeholder="Enter your location" />
        <button className="">
          <FaSearch className=" text-4xl  bg-blue-100 p-2 rounded-full hover:scale-110 transition-all" />
        </button>
      </form>
      <WeatherBox data={data} />
      <div>hi</div>
      <div>bye</div>
    </div>
  );
}

export default App;
