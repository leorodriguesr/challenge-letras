import styles from "./styles.module.scss";
import Image from "next/image";

import imageBrazil from "../../../public/images/brazil.png";
import imageUsa from "../../../public/images/usa.png";
import imageSpain from "../../../public/images/spain.png";

export const LanguageSelect = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.images}>
          <Image src={imageBrazil} alt="brazil" width={20} height={20} />
          <Image src={imageUsa} alt="brazil" width={20} height={20} />
          <Image src={imageSpain} alt="brazil" width={20} height={20} />
        </div>
        <p>Idioma Selecionado: Português</p>
      </div>
    </footer>
  );
};
