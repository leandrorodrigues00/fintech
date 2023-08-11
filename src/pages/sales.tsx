import { SalesItem } from "../components/sales-item";
import { useData } from "../context/data-context";

export function Sales() {
  const { data } = useData();

  if (data === null) return null;
  return (
    <ul>
      {data.map((venda) => (
        <li key={venda.id}>
          <SalesItem venda={venda} />
        </li>
      ))}
    </ul>
  );
}
