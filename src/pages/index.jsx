import Head from "next/head";
import { Search } from "../components/Search";
import styles from "../../styles/Home.module.scss";

const Home = () => {
  return (
    <>
      <Head>
        <title>LETRAS.COM - Challenge</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.container}>
        <Search />
      </div>
    </>
  );
};

export default Home;
