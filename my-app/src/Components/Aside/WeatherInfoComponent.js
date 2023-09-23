import React from "react";
import styled from "styled-components";
import { WeatherIcons } from "../../App.js";

export const WeatherInfoIcons = {
  sunset: `${process.env.PUBLIC_URL}/icons/temp.svg`,
  sunrise: `${process.env.PUBLIC_URL}/icons/temp.svg`,
  humidity: `${process.env.PUBLIC_URL}/icons/humidity.svg`,
  wind: `${process.env.PUBLIC_URL}/icons/wind.svg`,
  pressure: `${process.env.PUBLIC_URL}/icons/pressure.svg`,
  cloudy: `${process.env.PUBLIC_URL}/icons/cloudy.svg`,
  "cloudy-night": `${process.env.PUBLIC_URL}/icons/cloudy-night.svg`,
  day: `${process.env.PUBLIC_URL}/icons/day.svg`,
  night: `${process.env.PUBLIC_URL}/icons/night.svg`,
  "perfect-day": `${process.env.PUBLIC_URL}/icons/perfect-day.svg`,
  rain: `${process.env.PUBLIC_URL}/icons/rain.svg`,
  "rain-night": `${process.env.PUBLIC_URL}/icons/rain-night.svg`,
  storm: `${process.env.PUBLIC_URL}/icons/storm.svg`,
  sunny: `${process.env.PUBLIC_URL}/icons/sunny.svg`,
};

const Location = styled.span`
  margin: 15px auto;
  text-transform: capitalize;
  font-size: 20px;
  font-weight: bold;
`;

const Condition = styled.span`
  margin: 20px auto;
  text-transform: capitalize;
  font-size: 21px;
  & span {
    font-size: 28px;
  }
`;

const WeatherInfoLabel = styled.span`
  margin: 20px 25px 10px;
  text-transform: capitalize;
  text-align: start;
  width: 90%;
  font-weight: bold;
  font-size: 14px;
`;

const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;

const WeatherContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 30px auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const InfoIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[name]} data-testid={`weather-info-icon-${name}`} />
      <InfoLabel data-testid={`weather-info-label-${name}`}>
        {value}
        <span>{name}</span>
      </InfoLabel>
    </InfoContainer>
  );
};

const WeatherComponent = (props) => {
  const { weather } = props;
  const isDay = weather?.weather[0].icon?.includes('d');
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };
  return (
    <>
      <div className="weather-container">
        <WeatherContainer>
          <Condition>
            <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
            {`  |  ${weather?.weather[0].description}`}
          </Condition>
          <WeatherIcon src={WeatherIcons[weather?.weather[0].icon]} data-testid="weather-icon" />
        </WeatherContainer>
        <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
        <hr />
        <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
        <WeatherInfoContainer>
          <WeatherInfoComponent
            name={isDay ? "sunset" : "sunrise"}
            value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}
          />
          <WeatherInfoComponent name={"humidity"} value={weather?.main?.humidity} />
          <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed} />
          <WeatherInfoComponent name={"pressure"} value={weather?.main?.pressure} />
        </WeatherInfoContainer>
      </div>
    </>
  );
};

export default WeatherComponent;
