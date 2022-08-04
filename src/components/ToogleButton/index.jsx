import styles from "./styles.module.scss";

export const ToogleButton = ({onClick}) => {
  return (
    <header>
      <div className={styles.container}>
        <span>°F</span>
        <input type="checkbox" onClick={() => onClick(prev=>!prev)} />
        <span>°C</span>
      </div>
    </header>
  );
};
