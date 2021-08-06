/**
 * @name combineClassNames
 * @description Takes a list of class names and combines them into a single string to be passed as e.g. the className prop of react components. Classnames can be set conditionally with a boolean value (usage e.g. combineClassNames(isConditionMatched && "conditionMatched") will only set the classname "conditionMatched" if isConditionMatched is true).
 * @returns A string with all class names combined.
 */
export default function combineClassNames(...classNames) {
  return classNames.filter((c) => c !== false && c !== undefined).join(" ");
}
