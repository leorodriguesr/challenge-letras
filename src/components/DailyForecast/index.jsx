import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Image from "next/image";

import { WeatherType } from "../../pages/_app";
import { Loader } from "../Loader";

import styles from "./styles.module.scss";

export const DailyForecast = ({ coordinates }) => {

  const [data, setData] = useState({});
  const [removeLoader, setRemoveLoader] = useState(false);
  const isCelsius = useContext(WeatherType);
  const apiKey = process.env.API_KEY



  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lng}&units=imperial&appid=b45534abcf14eaa6846ac21e90ffd95b&lang=pt_br`
      )
      .then((res) => {
        setData(res.data);
        setRemoveLoader(true)
      });
  }, [coordinates]);
  console.log(data);

  const convertTemp = (value) => {
    return parseInt((value - 32) / 1.8);
  };

  const date = new Date();
  const convertDate = (date, value) => {
    const newDate = new Date(date);
    const daysWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
    const mounthYear = [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Maio",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ];

    return `${daysWeek[newDate.getDay()]}, ${newDate.getDate()} ${
      mounthYear[newDate.getMonth()]
    }`;
  };

  const forecast = [
    {
      date: data.list ? <p>{convertDate(data.list[0].dt_txt)}</p> : null,
      img: data.list ? (
        <Image
          src={`https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`}
          width={40}
          height={40}
          alt="img"
        />
      ) : null,
      tempMin: data.list ? (
        <span>
          {isCelsius
            ? convertTemp(data.list[0].main.temp_min)
            : parseInt(data.list[0].main.temp_min)}
          °
        </span>
      ) : null,
      tempMax: data.list ? (
        <span>
          {isCelsius
            ? convertTemp(data.list[0].main.temp_max)
            : parseInt(data.list[0].main.temp_max)}
          °
        </span>
      ) : null,
      description: data.list ? (
        <span>{data.list[0].weather[0].description}</span>
      ) : null,
    },
    {
      date: data.list ? <p>{convertDate(data.list[8].dt_txt)}</p> : null,
      img: data.list ? (
        <Image
          src={`https://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png`}
          width={40}
          height={40}
          alt="img"
        />
      ) : null,
      tempMin: data.list ? (
        <span>
          {isCelsius
            ? convertTemp(data.list[8].main.temp_min)
            : parseInt(data.list[8].main.temp_min)}
          °
        </span>
      ) : null,
      tempMax: data.list ? (
        <span>
          {isCelsius
            ? convertTemp(data.list[8].main.temp_max)
            : parseInt(data.list[8].main.temp_max)}
          °
        </span>
      ) : null,
      description: data.list ? (
        <span>{data.list[8].weather[0].description}</span>
      ) : null,
    },
    {
      date: data.list ? <p>{convertDate(data.list[16].dt_txt)}</p> : null,
      img: data.list ? (
        <Image
          src={`https://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png`}
          width={40}
          height={40}
          alt="img"
        />
      ) : null,
      tempMin: data.list ? (
        <span>
          {isCelsius
            ? convertTemp(data.list[16].main.temp_min)
            : parseInt(data.list[16].main.temp_min)}
          °
        </span>
      ) : null,
      tempMax: data.list ? (
        <span>
          {isCelsius
            ? convertTemp(data.list[16].main.temp_max)
            : parseInt(data.list[16].main.temp_max)}
          °
        </span>
      ) : null,
      description: data.list ? (
        <span>{data.list[16].weather[0].description}</span>
      ) : null,
    },
    {
      date: data.list ? <p>{convertDate(data.list[24].dt_txt)}</p> : null,
      img: data.list ? (
        <Image
          src={`https://openweathermap.org/img/wn/${data.list[24].weather[0].icon}@2x.png`}
          width={40}
          height={40}
          alt="img"
        />
      ) : null,
      tempMin: data.list ? (
        <span>
          {isCelsius
            ? convertTemp(data.list[24].main.temp_min)
            : parseInt(data.list[24].main.temp_min)}
          °
        </span>
      ) : null,
      tempMax: data.list ? (
        <span>
          {isCelsius
            ? convertTemp(data.list[24].main.temp_max)
            : parseInt(data.list[24].main.temp_max)}
          °
        </span>
      ) : null,
      description: data.list ? (
        <span>{data.list[24].weather[0].description}</span>
      ) : null,
    },
    {
      date: data.list ? <p>{convertDate(data.list[32].dt_txt)}</p> : null,
      img: data.list ? (
        <Image
          src={`https://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png`}
          width={40}
          height={40}
          alt="img"
        />
      ) : null,
      tempMin: data.list ? (
        <span>
          {isCelsius
            ? convertTemp(data.list[32].main.temp_min)
            : parseInt(data.list[32].main.temp_min)}
          °
        </span>
      ) : null,
      tempMax: data.list ? (
        <span>
          {isCelsius
            ? convertTemp(data.list[32].main.temp_max)
            : parseInt(data.list[32].main.temp_max)}
          °
        </span>
      ) : null,
      description: data.list ? (
        <span>{data.list[32].weather[0].description}</span>
      ) : null,
    },

    ,
  ];

  if (!removeLoader) {
    return <Loader />
  }

  return (
    <div className={styles.container}>
      <header>
        {data.city?.name?.toUpperCase()}
        <p>Previsão para 5 dias</p>
      </header>
      <div className={styles.dataMap}>
        {forecast.map((item, key) => (
          <div key={key} className={styles.itemMap}>
            <p className={styles.date}>{item.date}</p>
            <span>{item.img}</span>
            <div className={styles.maxMin}>
              <span>{item.tempMin}</span>
              <span>
                <div className={styles.line}></div>
              </span>
              <span>{item.tempMax}</span>
            </div>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
