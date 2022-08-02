import styles from "./styles.module.scss";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";

export const WeatherForecast = () => {
  return (
    <div className={styles.container}>
      <header>Nome da Cidade</header>
      <p>Nuvens dispersas</p>
      <main>
        <div className={styles.currentTemp}>
          <span>29°C</span>
          <FilterDramaIcon />
        </div>
        <div className={styles.maxMin}>
          <p>MAX: <span></span></p>
          <p>MIN: <span></span></p>
        </div>
      </main>
      <footer>
        <a>Ver previsão para os próximos 5 dias</a>
      </footer>
    </div>
  );
};
