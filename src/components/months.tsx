import { MonthButton } from "./month-button";

export function Months() {
  return (
    <div className="flex">
      <MonthButton n={-2} />
      <MonthButton n={-1} />
      <MonthButton n={0} />
    </div>
  );
}
