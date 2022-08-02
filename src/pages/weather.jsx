import styles from "../../styles/weather.module.scss";
import Head from "next/head";
import { ArrowBack } from "../components/ArrowBack";
import { WeatherForecast } from "../components/WeatherForecast";

const weather = () => {
  return (
    <div>
      <Head>
        <title>LETRAS.COM - Challenge</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ArrowBack />
      <main className={styles.container}>
        <WeatherForecast />
      </main>
    </div>
  );
};

export default weather;
