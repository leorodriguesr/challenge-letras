import styles from "./styles.module.scss";
import ArrowBack from "../ArrowBack";
import { DailyForecast } from "../DailyForecast";

const DailyWeather = ({coordinates}) => {
  return (
    <div className={styles.container}>
      {/* <ArrowBack /> */}

      <DailyForecast coordinates={coordinates} />
    </div>
  );
};

export default DailyWeather;
