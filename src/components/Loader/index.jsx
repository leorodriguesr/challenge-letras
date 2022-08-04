import Image from "next/image";

import loading from "/public/images/loading.gif";

import styles from "./styles.module.scss";

export const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <Image src={loading} width={50} height={50} alt="Loading..." />
    </div>
  );
};
