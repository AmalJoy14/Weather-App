import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./Components/CityComponent";
import WeatherComponent from "./Components/WeatherInfoComponent";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Roboto;
  background: linear-gradient(
    120deg,
    rgb(7, 41, 134) 0%,
    rgb(23, 26, 97) 0%,
    rgb(108, 131, 189) 100%
  );
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 25px;
  font-weight: bold;
  color: white;
  font-family: Roboto;
`;


function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
    );
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>Weather App</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} updateCity={updateCity} updateWeather={updateWeather} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;