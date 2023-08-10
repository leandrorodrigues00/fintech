import { useState } from "react";
import { DateInput } from "./date-input";

export function DateRange() {
  const [inicio, setInicio] = useState("");
  const [final, setFinal] = useState("");
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <DateInput
        label="Início"
        value={inicio}
        onChange={(event) => setInicio(event.target.value)}
      />

      {inicio}
      <DateInput
        label="Final"
        value={final}
        onChange={(event) => setFinal(event.target.value)}
      />
      {final}
    </form>
  );
}
