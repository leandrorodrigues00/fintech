import { useEffect, useState } from "react";
import { DateRange } from "./date-range";
import { Months } from "./months";
import { useLocation } from "react-router-dom";
import { ThemeButton } from "./theme-button";

export function Header() {
  const [title, setTitle] = useState("Resumo");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setTitle("Resumo");
      document.title = "Fintech | Resumo";
    } else if (location.pathname === "/vendas") {
      setTitle("Vendas");
      document.title = "Fintech | Vendas";
    }
  }, [location]);

  return (
    <header className="mb">
      <div className="daterange mb">
        <DateRange />

        <div style={{ alignItems: "center" }} className="box summary flex bg-3">
          <h1>{title}</h1>

          <ThemeButton />
        </div>
      </div>
      <Months />
    </header>
  );
}
