import { CSSProperties } from "react";
import { useData } from "../context/data-context";
import { formatDate } from "../lib/utils";

const buttonStyles: CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  backgroundColor: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(--color-2)",
  fontWeight: 600,
  textTransform: "capitalize",
};

function getMonthName(n: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + n);
  return new Intl.DateTimeFormat("pt-BR", {
    month: "long",
  }).format(date);
}

export function MonthButton({ n }: { n: number }) {
  const { setInicio, setFinal } = useData();

  function setMonth(n: number) {
    const date = new Date();
    date.setMonth(date.getMonth() + n);

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    setInicio(formatDate(firstDay));
    setFinal(formatDate(lastDay));
  }

  return (
    <button style={buttonStyles} onClick={() => setMonth(n)}>
      {getMonthName(n)}
    </button>
  );
}
