import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Axios from "axios";
import './App.css';
import WeatherComponent from "./Components/Aside/WeatherInfoComponent.js";
import Header from './Components/Header/Header.js';
import Welcome from './Components/Header/Welcome.js';
import Navigation from './Components/Navigation/Navigation.js';
import NewsCarousel from './Components/News/NewsCarousel.js';
import AboutUs from './Components/AboutUs/AboutUs.js';
import Calendar from './Components/Main/Calendar.js';
import Table from './Components/Main/Table.js';
import Map from './Components/Main/Map.js';
import MembershipForm from './Components/Main/MembershipForm.js';
import FooterMessage from "./Components/Footer/FooterMessage.js";
import ScrollToTopButton from "./Components/Footer/ScrollToTopButton.js";
import Footer from './Components/Footer/Footer.js';
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary.js";
import ErrorThrower from "./Components/ErrorBoundary/ErrorThrower.js";

export const WeatherIcons = {
  "01d": `${process.env.PUBLIC_URL}/icons/sunny.svg`,
  "01n": `${process.env.PUBLIC_URL}/icons/night.svg`,
  "02d": `${process.env.PUBLIC_URL}/icons/day.svg`,
  "02n": `${process.env.PUBLIC_URL}/icons/cloudy-night.svg`,
  "03d": `${process.env.PUBLIC_URL}/icons/cloudy.svg`,
  "03n": `${process.env.PUBLIC_URL}/icons/cloudy.svg`,
  "04d": `${process.env.PUBLIC_URL}/icons/perfect-day.svg`,
  "04n": `${process.env.PUBLIC_URL}/icons/cloudy-night.svg`,
  "09d": `${process.env.PUBLIC_URL}/icons/rain.svg`,
  "09n": `${process.env.PUBLIC_URL}/icons/rain-night.svg`,
  "10d": `${process.env.PUBLIC_URL}/icons/rain.svg`,
  "10n": `${process.env.PUBLIC_URL}/icons/rain-night.svg`,
  "11d": `${process.env.PUBLIC_URL}/icons/storm.svg`,
  "11n": `${process.env.PUBLIC_URL}/icons/storm.svg`,
};


function App() {
  const [weather, updateWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await Axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=Melbourne,au&appid=fe4feefa8543e06d4f3c66d92c61b69c"
      );
      updateWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    // Fetch weather data for Melbourne, AU
    fetchWeather();
  }, []);

  // Styled components
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px 10px;
    margin: auto;
    font-family: Montserrat;
  `;

  const newsImages = [
    `${process.env.PUBLIC_URL}/images/news-image-1.jpg`,
    `${process.env.PUBLIC_URL}/images/news-image-2.jpg`,
    `${process.env.PUBLIC_URL}/images/news-image-3.jpg`,
  ];
  

  return (
    <ErrorBoundary>
      <div>
        <div className="App">
          <div className="container">
            <div className="left-container">
              <Header />
              <Welcome />
              <Navigation />
              <div id="news-section">
                <NewsCarousel images={newsImages} />
              </div>
              <div id="about-section">
                <AboutUs />
              </div>
              <div id="calendar-section">
                <Calendar />
              </div>
              <Table />
              <Map />
              <div id="membership-section">
                <MembershipForm />
              </div>
              <FooterMessage />
              <ScrollToTopButton />
            </div>
            <div className="right-container">
              <Container className="weather">
                {weather && <WeatherComponent weather={weather} />}
              </Container>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    {/*<ErrorThrower />*/}
    </ErrorBoundary>
  );
}

export default App;