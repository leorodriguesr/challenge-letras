import { useState } from "react";

import { ArrowBack } from "../ArrowBack";
import { CurrentForecast } from "../CurrentForecast";

import styles from "./styles.module.scss";

const CurrentWeather = ({ onBack, coordinates }) => {
  const [activeDaily, setActiveDaily] = useState(false);

  return (
    <div>
      <main className={styles.container}>
        <ArrowBack
          onClick={activeDaily ? () => setActiveDaily(false) : onBack}
        />
        <CurrentForecast
          coordinates={coordinates}
          setActiveDaily={setActiveDaily}
          activeDaily={activeDaily}
        />
      </main>
    </div>
  );
};

export default CurrentWeather;
