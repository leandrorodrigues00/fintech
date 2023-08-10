import { DateInput } from "./date-input";
import { useData } from "../context/data-context";

export function DateRange() {
  const { inicio, final, setFinal, setInicio } = useData();

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
