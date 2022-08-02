import styles from "./styles.module.scss";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

// const useOutsideClick = (handler) => {
//   let showSearch = useRef();

//   useEffect(() => {
//     let maybeHandler = (event) => {
//       if (!showSearch?.current?.contains(event.target)) {
//         handler();
//       }
//     };
//     document.addEventListener("mousedown", maybeHandler);

//     return () => {
//       document.removeEventListener("mousedown", maybeHandler);
//     };
//   });

//   return showSearch; 
// };

export const Search = () => {
  const [activeInput, setActiveInput] = useState(false);

  // const showSearch = useOutsideClick(() => {
  //   setActiveInput(false);
  // });

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();

      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        console.log("Coordinates: ", { lat, lng });
      });
      
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      //   return (
      //     <li key={place_id} onClick={handleSelect(suggestion)}>
      //       <strong>{main_text}</strong> <small>{secondary_text}</small>
      //     </li>
      //   );
      // });


      return (
        <div key={place_id} className={styles.resultsItem}>
          <ul>
            <Link href="/weather">
            <li onClick={handleSelect(suggestion)}>
              <span>{main_text}</span> <small>{secondary_text}</small>
            </li>
            </Link>
          </ul>
        </div>
      );
    });
  
  
  return (
    <div ref={ref} className={styles.container}>
      <p>Como está o tempo hoje?</p>
      <input
        className={styles.input}
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Digite o nome da cidade"
        onClick={() => setActiveInput(!activeInput)}
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === "OK" && (
        <div className={styles.resultsContainer}>{renderSuggestions()}</div>
      )}
      
      {/* {activeInput && <div className={styles.resultsContainer} ref={showSearch}>{renderSuggestions()}</div>} */}
    </div>
  );
};
