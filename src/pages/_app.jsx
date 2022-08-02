import "../../styles/global.scss";

import { ToogleButton } from "../components/ToogleButton";
import { LanguageSelect } from "../components/LanguageSelect";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <ToogleButton />
      <Component {...pageProps} />
      
      <LanguageSelect />
    </div>
  );
}

export default MyApp;
