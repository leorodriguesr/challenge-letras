import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

import DailyWeather from "../DailyWeather";
import { WeatherType } from "../../pages/_app";
import { Loader } from "../Loader";

import styles from "./styles.module.scss";

export const CurrentForecast = ({
  coordinates,
  activeDaily,
  setActiveDaily,
}) => {
  const [data, setData] = useState({});
  const isCelsius = useContext(WeatherType);
  const [removeLoader, setRemoveLoader] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lng}&units=imperial&appid=b45534abcf14eaa6846ac21e90ffd95b&lang=pt_br `
      )
      .then((res) => {
        setData(res.data);
        setRemoveLoader(true);
      });
  }, [coordinates]);
  // console.log(data);

  const convertTemp = (value) => {
    return parseInt((value - 32) / 1.8);
  };

  if (activeDaily) {
    return <DailyWeather coordinates={coordinates} />;
  }

  if (!removeLoader) {
    return <Loader />;
  }
  return (
    <div className={styles.container}>
      <header>
        {data.name?.toUpperCase()}
        {data.weather ? <p>{data.weather[0].description}</p> : null}
      </header>
      <main>
        <div className={styles.currentTemp}>
          {data.main ? (
            <span>
              {isCelsius
                ? convertTemp(data.main.temp)
                : parseInt(data.main.temp)}
              °
            </span>
          ) : null}
          {data.weather ? (
            <Image
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              width={99.69}
              height={100}
              alt="img"
            />
          ) : null}
        </div>
        <div className={styles.maxMin}>
          <p>
            MAX:{" "}
            {data.main ? (
              <span>
                {isCelsius
                  ? convertTemp(data.main.temp_max)
                  : parseInt(data.main.temp_max)}
                °
              </span>
            ) : null}
          </p>
          <p>
            MIN:{" "}
            {data.main ? (
              <span>
                {isCelsius
                  ? convertTemp(data.main.temp_min)
                  : parseInt(data.main.temp_min)}
                °
              </span>
            ) : null}
          </p>
        </div>
      </main>
      <footer>
        <a onClick={() => setActiveDaily(true)}>
          Ver previsão para os próximos 5 dias
        </a>
      </footer>
    </div>
  );
};
