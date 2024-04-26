import React, { useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";

type AutoCompleteProps = {
  options: string[];
};

const defaultInputValue = "";

export default function Autocomplete({ options }: AutoCompleteProps) {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [inputValue, setInputValue] = useState(defaultInputValue);

  const ref = useOutsideClick(() => {
    if (modalVisibility) {
      setModalVisibility(!modalVisibility);
    }
  });

  const handleModalDisplay = () => {
    setModalVisibility(!modalVisibility);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log("value", inputValue);
  };

  return (
    <div ref={ref}>
      <input
        type="text"
        data-testid="autocomplete-input"
        onClick={handleModalDisplay}
        onChange={(e) => onChangeHandler(e)}
        value={inputValue}
      />

      {modalVisibility && (
        <div data-testid="autocomplete-modal">
          <ul>
            {options
              .filter((element) => {
                if (inputValue === "") {
                  return element;
                } else {
                  return element
                    .toLocaleLowerCase()
                    .startsWith(inputValue.toLocaleLowerCase());
                }
              })
              .map((element) => {
                return <li key={element}>{element}</li>;
              })}
          </ul>
        </div>
      )}
    </div>
  );
}
