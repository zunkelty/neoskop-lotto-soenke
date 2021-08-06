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

const comparePropsEquality = (prev, next) => {
  const isEqual =
    prev.isDisabled === next.isDisabled && prev.isSelected === next.isSelected;
  return isEqual;
};

export default React.memo(Zahlenfeld, comparePropsEquality);
