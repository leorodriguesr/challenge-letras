import styles from "./styles.module.scss";
import Link from "next/link";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const ArrowBack = ({ onClick }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <ArrowBackIcon />
    </div>
  );
};
