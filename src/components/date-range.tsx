import { useState } from "react";
import { DateInput } from "./date-input";

export function DateRange() {
  const [inicio, setInicio] = useState("");
  const [final, setFinal] = useState("");
  return (
    <form className="box flex" onSubmit={(event) => event.preventDefault()}>
      <DateInput
        label="Início"
        value={inicio}
        onChange={(event) => setInicio(event.target.value)}
      />

      <DateInput
        label="Final"
        value={final}
        onChange={(event) => setFinal(event.target.value)}
      />
    </form>
  );
}
