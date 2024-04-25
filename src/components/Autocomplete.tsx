import React, { useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";

type AutoCompleteProps = {
  options: string[];
};

export default function Autocomplete({ options }: AutoCompleteProps) {
  const [modalVisibility, setModalVisibility] = useState(false);

  const ref = useOutsideClick(() => {
    if (modalVisibility) {
      setModalVisibility(!modalVisibility);
    }
  });

  const handleModalDisplay = () => {
    setModalVisibility(!modalVisibility);
  };

  return (
    <div ref={ref}>
      <input
        type="text"
        data-testid="autocomplete-input"
        onClick={handleModalDisplay}
      />

      {modalVisibility && (
        <div data-testid="autocomplete-modal">
          <ul>
            {options.map((option) => {
              return <li key={option}>{option}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
