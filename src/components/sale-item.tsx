import { NavLink } from "react-router-dom";
import { VendaConfig } from "../types";

interface SaleItemProps {
  venda: VendaConfig;
}

export function SaleItem({ venda }: SaleItemProps) {
  return (
    <div className="venda box">
      <NavLink to={`/vendas/${venda.id}`} style={{ fontFamily: "monospace" }}>
        {venda.id}
      </NavLink>

      <div>{venda.nome}</div>
      <div>
        {venda.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
}
