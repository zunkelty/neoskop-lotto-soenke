import React from "react";
import combineClassNames from "../../helpers/combineClassNames.helper";
import "./Zahlenfeld.styles.scss";

function Zahlenfeld({ isDisabled, isSelected, value, onClick }) {
  return (
    <button
      key={value}
      className={combineClassNames(
        "zahlenfeld",
        isDisabled && "zahlenfeld--disabled",
        isSelected && "zahlenfeld--selected"
      )}
      onClick={() => !isDisabled && onClick(value)}
    >
      {value}
    </button>
  );
}

//Um unnötige Re-Renders zu vermeiden, wird nur dann, wenn sich eine der Eigenschaften isSelected oder isDisabled ändert, der Inhalt neu gerendert.
const comparePropsEquality = (prev, next) => {
  const isEqual =
    prev.isDisabled === next.isDisabled && prev.isSelected === next.isSelected;
  return isEqual;
};

export default React.memo(Zahlenfeld, comparePropsEquality);
