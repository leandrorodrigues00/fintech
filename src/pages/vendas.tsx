import { SaleItem } from "../components/sale-item";
import { useData } from "../context/data-context";

export function Vendas() {
  const { data } = useData();

  if (data === null) return null;
  return (
    <ul>
      {data.map((venda) => (
        <li key={venda.id}>
          <SaleItem venda={venda} />
        </li>
      ))}
    </ul>
  );
}
