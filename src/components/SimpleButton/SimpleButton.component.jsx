import combineClassNames from "../../helpers/combineClassNames.helper";
import "./SimpleButton.styles.scss";

const SimpleButton = ({ children, onClick, isDisabled }) => {
  return (
    <button
      className={combineClassNames(
        "simple-button",
        isDisabled && "simple-button--disabled"
      )}
      onClick={() => !isDisabled && onClick()}
    >
      {children}
      {/* SVG Icon "chevron-right" von https://boxicons.com */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="inherit"
      >
        <path d="M10.061 19.061L17.121 12 10.061 4.939 7.939 7.061 12.879 12 7.939 16.939z" />
      </svg>
    </button>
  );
};

export default SimpleButton;
