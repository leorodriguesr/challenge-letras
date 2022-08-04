import "../../styles/global.scss";

import { ToogleButton } from "../components/ToogleButton";
import { LanguageSelect } from "../components/LanguageSelect";
import { createContext, useState } from "react";

export const WeatherType = createContext(false);

function MyApp({ Component, pageProps }) {
  const [isCelsius, setIsCelsius] = useState(false);

  return (
    <div className="container">
      <ToogleButton onClick={setIsCelsius} />
      <WeatherType.Provider value={isCelsius}>
        <Component {...pageProps} />
      </WeatherType.Provider>
      <LanguageSelect />
    </div>
  );
}

export default MyApp;
