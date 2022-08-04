import ArrowBack from "../ArrowBack";
import { DailyForecast } from "../DailyForecast";

import styles from "./styles.module.scss";

const DailyWeather = ({ coordinates }) => {
  return (
    <div className={styles.container}>
      <DailyForecast coordinates={coordinates} />
    </div>
  );
};

export default DailyWeather;
