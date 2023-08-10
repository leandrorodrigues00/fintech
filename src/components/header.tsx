import { useState } from "react";
import { DateRange } from "./date-range";
import { Months } from "./months";

export function Header() {
  const [title, setTitle] = useState("Resumo");
  return (
    <header className="mb">
      <div className="daterange mb">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Months />
    </header>
  );
}
