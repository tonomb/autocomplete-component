import React from "react";

import styles from "./Autocomplete.module.css";

type AutoCompleteProps = {
  options: string[];
};

type AutoCompleteState = {
  modalVisibility: boolean;
  inputValue: string;
  optionsCounter: number;
  filteredOptions: string[];
};

const defaultInputValue = "";

class AutocompleteClass extends React.Component<
  AutoCompleteProps,
  AutoCompleteState
> {
  constructor(props: AutoCompleteProps) {
    super(props);
    this.state = {
      modalVisibility: false,
      inputValue: defaultInputValue,
      optionsCounter: -1,
      filteredOptions: [...this.props.options],
    };
  }

  componentDidUpdate(
    prevProps: Readonly<AutoCompleteProps>,
    prevState: Readonly<AutoCompleteState>
  ): void {
    const { inputValue } = this.state;
    const { options } = this.props;

    if (inputValue !== prevState.inputValue) {
      if (inputValue === "") {
        this.setState({
          optionsCounter: 0,
          filteredOptions: options,
        });
      } else {
        this.filterAutocompleteOptions(options)
          .then((data) => {
            this.setState({
              filteredOptions: data,
            });
          })
          .catch((error) => {
            console.log(
              "An error ocurred when filtering the autocomplete",
              error
            );
          });
      }
    }
  }

  //   // Hook that handles closing the autocomplete modal with external clicks
  //   const ref = useOutsideClick(() => {
  //     if (modalVisibility) {
  //       setModalVisibility(!modalVisibility);
  //     }
  //   });

  filterAutocompleteOptions = (options: string[]): Promise<string[]> => {
    const { inputValue } = this.state;
    // This is used to simulate the async from an api
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
  };

  handleModalDisplay = () => {
    this.setState((prevState) => ({
      modalVisibility: !prevState.modalVisibility,
    }));
  };

  onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      modalVisibility: true,
      inputValue: e.target.value,
    });
  };

  handleOptionClick = (e: React.MouseEvent) => {
    const value = e.currentTarget.getAttribute("value");
    if (value !== null) {
      this.setState({ inputValue: value });
    } else {
      this.setState({ inputValue: "" });
    }
  };

  handleCursorHighlight = (e: React.MouseEvent) => {
    const indexValue = e.currentTarget.getAttribute("data-index");
    this.setState({ optionsCounter: Number(indexValue) });
  };

  handleKeyEvents = (e: React.KeyboardEvent) => {
    const { optionsCounter, filteredOptions, modalVisibility } = this.state;

    if (e.key === "Enter") {
      if (modalVisibility) {
        this.setState({
          inputValue: filteredOptions[optionsCounter],
          modalVisibility: false,
        });
      }

      if (!modalVisibility) {
        this.setState({
          modalVisibility: true,
        });
      }
    }

    if (e.key === "ArrowDown") {
      if (optionsCounter < filteredOptions.length - 1) {
        this.setState({
          optionsCounter: optionsCounter + 1,
        });
      }
    }

    if (e.key === "ArrowUp") {
      if (optionsCounter !== 0) {
        this.setState({
          optionsCounter: optionsCounter - 1,
        });
      }
    }

    if (e.key === "Escape") {
      this.setState({
        modalVisibility: false,
        optionsCounter: 0,
      });
    }
  };

  highlightText = (text: string) => {
    const parts = text.split("");
    const inputParts = this.state.inputValue.split("");

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
  };

  render() {
    const { modalVisibility, inputValue, filteredOptions, optionsCounter } =
      this.state;

    return (
      <div>
        <label className={styles.container}>
          <input
            type="text"
            data-testid="autocomplete-input"
            onClick={this.handleModalDisplay}
            onChange={(e) => this.onChangeHandler(e)}
            value={inputValue}
            className={styles.input}
            onKeyDown={(e) => this.handleKeyEvents(e)}
          />

          {modalVisibility && (
            <div data-testid="autocomplete-modal" className={styles.modal}>
              <ul>
                {filteredOptions.map((element, index) => {
                  return (
                    <li
                      key={index}
                      data-index={index}
                      onClick={(e) => this.handleOptionClick(e)}
                      value={element}
                      style={{
                        backgroundColor:
                          index === optionsCounter ? "#F0F0F0" : undefined,
                      }}
                      onMouseEnter={(e) => this.handleCursorHighlight(e)}
                    >
                      <p>{this.highlightText(element)}</p>
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
}

export default AutocompleteClass;
