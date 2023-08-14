import axios from 'axios'
import React, { useState } from 'react'


export default function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_KEY}&units=metric`

  const searchLocation = () => {
    if(location !== ''){
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    }).catch((err) => alert("Enter a valid City Name"))
    setLocation('')

  }}

  return (
    <div className="app">

      <header className="search">
        <input value={location}
          onChange={event => setLocation(event.target.value)}
          placeholder='Enter Location'
          type="text" />

        <button type="submit" onClick={searchLocation}>Submit</button>

      </header>

      <main>
        <header>
          <section className="location">
            <p>{data.name}</p>

          </section>
          <section className="temp">
          {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </section>
          <section className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}

          </section>

        </header>
        {data.name !== undefined &&
        <footer>
          <section className="feels">

          {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
            <p>Feels Like</p>
          </section>
          <section className="humidity">

          {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </section>
          <section className="wind">

          {data.wind ? <p className='bold'>{data.wind.speed.toFixed()*3.6} KMPH</p> : null}
            <p>Wind Speed</p>

          </section>

        </footer>
        }

      </main>
    </div>
  )
}
