import { DateRange } from "./date-range";
import { Months } from "./months";

export function Header() {
  return (
    <header className="mb">
      <div className="mb">
        <DateRange />
      </div>
      <Months />
    </header>
  );
}
