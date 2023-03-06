import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [location, setLocation] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  console.log(process.env.REACT_APP_CITY_KEY);

  async function getLocation() {
    const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${searchQuery}&format=json`;
    const res = await axios.get(API);
    setLocation(res.data[0]);
  }

  function handleSearch(event) {
    setSearchQuery(event.target.value);
  }
  return (
    <div className="App">
      {location.display_name && (
        <p>
          {location.display_name} Is at lat and lon: {location.lat} /
          {location.lon}
        </p>
      )}
      <input onChange={handleSearch} placeholder="Search for a City" />
      <button onClick={getLocation}>Get Data</button>
    </div>
  );
}

export default App;
