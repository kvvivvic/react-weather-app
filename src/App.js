import { useState } from "react";
import axios from "axios";

function App() {
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
  const handleChange = (e) => setLocation(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios({
      method: "get",
      url: url,
    }).catch(console.log("error"));
    console.log(data);
    setLocation("");
  };
  return (
    <>
      <div>hi</div>
      <form onSubmit={handleSubmit}>
        <input
          className="border border-red-500"
          type="text"
          value={location}
          onChange={handleChange}
        />
      </form>
      <div></div>
    </>
  );
}

export default App;
