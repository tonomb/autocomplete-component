import React, { useState } from "react";

export default function Autocomplete() {
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
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
            <li>Option 4</li>
            <li>Option 5</li>
          </ul>
        </div>
      )}
    </form>
  );
}
