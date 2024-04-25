import React, { useState } from "react";

type AutoCompleteProps = {
  options: string[];
};

export default function Autocomplete({ options }: AutoCompleteProps) {
  const [modalVisibility, setModalVisibility] = useState(false);

  const handleModalDisplay = () => {
    setModalVisibility(!modalVisibility);
  };

  return (
    <form>
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
    </form>
  );
}
