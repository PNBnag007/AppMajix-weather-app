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
      backgroundImage: `url("https://image.shutterstock.com/image-photo/rural-landscape-wild-changing-stormy-260nw-1906424227.jpg")`, height: "100",
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
