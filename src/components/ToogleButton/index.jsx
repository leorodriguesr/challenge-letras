import styles from "./styles.module.scss";

export const ToogleButton = () => {
  return (
    <header>
      <div className={styles.container}>
        <span>°F</span>
        <input type="checkbox" />
        <span>°C</span>
      </div>
    </header>
  );
};
