import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
//import "./weather.css";

function Weather() {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "",
    country: "",
  });

  const APIKEY = "bccb5538c528f56fd0cc0505d846c17e";
  async function weatherData(e) {
    e.preventDefault();
    if (form.city === "") {
      alert("Add values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({ data: data });
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }
    if (name === "country") {
      setForm({ ...form, country: value });
    }
  };
  return (
    <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'  >
      <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1' style={{ 
      backgroundImage: `url("data:image/jpeg;base64,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")`, height: "100",
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'}}>
        <div className=''>
          <div className='mt-12 flex flex-col items-center'>
            <h1 className='text-2xl xl:text-3xl font-extrabold'>
              Get Weather Details
            </h1>
            <div className='w-full flex flex-row mt-8 text-indigo-500'>
              <form
                className='mx-auto max-w-xs relative '
      
              >
                <input
          className='w-full px-8 py-4 rounded-lg font-medium flex flex-row  bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
          type="text"
          placeholder="city"
          name="city"
          onChange={(e) => handleChange(e)}
        />
        &nbsp; &nbsp; &nbsp;&nbsp;
        <input
          className='w-full px-8 py-4 rounded-lg font-medium flex flex-row bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
          type="text"
          placeholder="Country"
          name="country"
          onChange={(e) => handleChange(e)}
        />
        <button className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none' onClick={(e) => weatherData(e)}>
          Submit
        </button>
                
              </form>
              {weather.data !== undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
