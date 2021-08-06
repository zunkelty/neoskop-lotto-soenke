import { useCallback, useState } from "react";
import SimpleButton from "../SimpleButton/SimpleButton.component";
import Zahlenfeld from "../Zahlenfeld/Zahlenfeld.component";
import "./Spielfeld.styles.scss";

export default function Spielfeld() {
  //Der State 'isSelected' verwaltet den Click-State aller 49 Buttons und speichert für jedes Feld jeweils, ob es geklickt ist (true) oder nicht (false).
  const [isSelected, setIsSelected] = useState(Array(49).fill(false));

  //Obwohl aus dem state 'isSelected' abgeleitet werden kann, ob bereits genug Felder gewählt worden sind (Anzahl der Felder mit 'true' als Wert), bietet sich ein zusätzlicher State an.
  //Ansonsten müsste bei jedem Klick auf ein Zahlenfeld für jeden Button die Zähloperation ausgeführt werden.
  const [canProceed, setCanProceed] = useState(false);

  //Beim Klick auf ein Zahlenfeld, wird der Click-State des entsprechenden Feldes invertiert.
  //Außerdem wird der State 'canProceed', falls 6 Felder gewählt wurden, auf 'true' gesetzt.
  const onFieldClick = useCallback((i) => {
    setIsSelected((prev) => {
      const newIsSelected = [...prev];
      newIsSelected[i - 1] = !newIsSelected[i - 1];
      setCanProceed(newIsSelected.filter(Boolean).length === 6);
      return newIsSelected;
    });
  }, []);

  //Beim Klick auf "Weiter" werden die gewählten Zahlenfelder ermittelt und ausgegeben
  const onProceed = () => {
    let selected = isSelected.flatMap((isFieldSelected, i) => {
      return isFieldSelected ? i + 1 : [];
    });
    //Im realen Projekt würde an dieser Stelle beispielsweise eine API-Anfrage folgen oder die Werte per Callback an den Parent-Component übergeben werden.
    console.log(selected);
    alert(
      "Du hast die Zahlen: " +
        selected.slice(0, selected.length - 1).join(", ") +
        " und " +
        selected[selected.length - 1] +
        " getippt."
    );
    setIsSelected(Array(49).fill(false));
    setCanProceed(false);
  };

  return (
    <div className="lottoschein">
      <h1>Ihr Spielfeld</h1>
      <div className="spielfeld-wrapper">
        <div className="spielfeld">
          {isSelected.map((isFieldSelected, i) => (
            <Zahlenfeld
              key={i}
              value={i + 1}
              isSelected={isFieldSelected}
              isDisabled={!isFieldSelected && canProceed}
              onClick={onFieldClick}
            />
          ))}
        </div>
      </div>
      <SimpleButton onClick={onProceed} isDisabled={!canProceed}>
        Weiter
      </SimpleButton>
    </div>
  );
}
