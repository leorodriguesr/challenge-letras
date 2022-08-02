import styles from "./styles.module.scss";
import Link from "next/link"

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const ArrowBack = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <ArrowBackIcon />
      </Link>
    </div>
  )
}