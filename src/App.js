import axios from 'axios'
import React from 'react'


export default function App() {

  // const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=fa97b2f401f6de2674b9512321708261`


  return (
    <div className="app">

      <header className = "search">
        <input />

      </header>

      <main>
        <header>
          <section className="location">
            <p>London</p>

          </section>
          <section className="temp">
            <h1> Temp </h1>
          </section>
          <section className="description">
            <p>Clouds</p>

          </section>

        </header>
        <footer>
          <section className="feels">

            <p>65 deg C</p>
            <p>Feels Like</p>
          </section>
          <section className="humidity">

            <p> 20 %</p>
            <p>Humidity</p>
          </section>
          <section className="wind">

            <p> 12 MPH</p>
            <p>Wind Speed</p>

          </section>

        </footer>

      </main>
    </div>
  )
}
