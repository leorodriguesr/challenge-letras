import { useState, useEffect, useRef } from "react";

import CurrentWeather from "../CurrentWeather";

import styles from "./styles.module.scss";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

export const Search = () => {
  const [coordinates, setCoordinates] = useState();

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Defina o escopo da pesquisa aqui */
    },
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    // Quando o usuário clica fora do componente, ele é dispensado
    // as sugestões pesquisadas são chamadas por este método
    clearSuggestions();
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = (data) => () => {
    // Quando o usuário seleciona um local, substitui a key sem solicitar dados da API
    setValue(data.description, false);
    clearSuggestions();

    getGeocode({ address: data.description }).then((results) => {
      const { lat, lng } = getLatLng(results[0]);
      //Salvando as coordenadas em um state;
      setCoordinates({ lat: lat, lng: lng });
      // console.log("Coordinates: ", { lat, lng });
    });
  };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <div key={place_id} className={styles.resultsItem}>
          <ul>
            <li onClick={handleSelect(suggestion)}>
              <span>{main_text}</span> <small>{secondary_text}</small>
            </li>
          </ul>
        </div>
      );
    });

  const onBack = () => {
    setCoordinates(null);
    setValue("");
  };

  if (coordinates) {
    return <CurrentWeather onBack={onBack} coordinates={coordinates} />;
  }
  return (
    <div ref={ref} className={styles.container}>
      <p>Como está o tempo hoje?</p>
      <input
        className={styles.input}
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Digite o nome da cidade"
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === "OK" && (
        <div className={styles.resultsContainer}>{renderSuggestions()}</div>
      )}

      {/* {activeInput && <div className={styles.resultsContainer} ref={showSearch}>{renderSuggestions()}</div>} */}
    </div>
  );
};
