/**
 * @name combineClassNames
 * @description Nimmt eine Liste von Klassennamen und kombiniert sie zu einem einzigen String, der z.B. als className-Prop an React-Komponenten übergeben werden kann. Klassennamen können mit einem booleschen Wert bedingt gesetzt werden (Verwendung z.B. combineClassNames(isConditionMatched && "conditionMatched") setzt den Klassennamen "conditionMatched" nur, wenn isConditionMatched true ist).
 * @returns Ein String mit allen Klassennamen kombiert.
 */
export default function combineClassNames(...classNames) {
  return classNames.filter((c) => c !== false && c !== undefined).join(" ");
}
