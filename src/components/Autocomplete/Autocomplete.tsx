import React, { useState, useEffect } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import styles from "./Autocomplete.module.css";

type AutoCompleteProps = {
  options: string[];
};

const defaultInputValue = "";

export default function Autocomplete({ options }: AutoCompleteProps) {
  const [modalVisibility, setModalVisibility] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(defaultInputValue);
  const [optionsCounter, setOptionsCounter] = useState<number>(-1);
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

  useEffect(() => {
    if (inputValue === "") {
      setOptionsCounter(0);
      setFilteredOptions(options);
    } else {
      filterAutocompleteOptions(options)
        .then((data) => {
          setFilteredOptions(data);
        })
        .catch((error) => {
          console.log(
            "An error ocurred when filtering the autocomplete",
            error
          );
        });
    }
  }, [inputValue, options]);

  // Hook that handles closing the autocomplete modal with external clicks
  const ref = useOutsideClick(() => {
    if (modalVisibility) {
      setModalVisibility(!modalVisibility);
    }
  });

  function filterAutocompleteOptions(options: string[]): Promise<string[]> {
    return new Promise((resolve) => {
      const filtered = options.filter((element) => {
        if (inputValue === "") {
          return element;
        } else {
          return element
            .toLocaleLowerCase()
            .startsWith(inputValue.toLocaleLowerCase());
        }
      });

      resolve(filtered);
    });
  }

  function handleModalDisplay() {
    setModalVisibility(!modalVisibility);
  }

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setModalVisibility(true);
    setInputValue(e.target.value);
  }

  function handleOptionClick(e: React.MouseEvent) {
    const value = e.currentTarget.getAttribute("value");
    if (value !== null) {
      setInputValue(value);
    } else {
      setInputValue("");
    }
  }

  function handleCursorHighlight(e: React.MouseEvent) {
    const indexValue = e.currentTarget.getAttribute("data-index");
    setOptionsCounter(Number(indexValue));
  }

  function handleKeyEvents(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      if (modalVisibility) {
        setInputValue(filteredOptions[optionsCounter]);
        setModalVisibility(false);
      }

      if (!modalVisibility) {
        setModalVisibility(true);
      }
    }

    if (e.key === "ArrowDown") {
      if (optionsCounter < filteredOptions.length - 1) {
        setOptionsCounter(optionsCounter + 1);
      }
    }

    if (e.key === "ArrowUp") {
      if (optionsCounter !== 0) setOptionsCounter(optionsCounter - 1);
    }

    if (e.key === "Escape") {
      setModalVisibility(false);
      setOptionsCounter(0);
    }
  }

  function highlightText(text: string) {
    const parts = text.split("");
    const inputParts = inputValue.split("");

    return parts.map((part, index) => {
      if (
        inputParts[index] !== undefined &&
        part.toLocaleLowerCase() === inputParts[index].toLocaleLowerCase()
      ) {
        return (
          <span key={index} className={styles.highlight}>
            {part}
          </span>
        );
      } else {
        return part;
      }
    });
  }

  return (
    <div ref={ref}>
      <label className={styles.container}>
        <input
          type="text"
          data-testid="autocomplete-input"
          onClick={handleModalDisplay}
          onChange={(e) => onChangeHandler(e)}
          value={inputValue}
          className={styles.input}
          onKeyDown={(e) => handleKeyEvents(e)}
        />

        {modalVisibility && (
          <div data-testid="autocomplete-modal" className={styles.modal}>
            <ul>
              {filteredOptions.map((element, index) => {
                return (
                  <li
                    key={index}
                    data-index={index}
                    onClick={(e) => handleOptionClick(e)}
                    value={element}
                    style={{
                      backgroundColor:
                        index === optionsCounter ? "#F0F0F0" : undefined,
                    }}
                    onMouseEnter={(e) => handleCursorHighlight(e)}
                  >
                    <p>{highlightText(element)}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </label>
    </div>
  );
}
