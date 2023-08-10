import { VendaConfig } from "../types";

interface SaleItemProps {
  venda: VendaConfig;
}

export function SaleItem({ venda }: SaleItemProps) {
  return (
    <div className="venda box">
      <a href="#" style={{ fontFamily: "monospace" }}>
        {venda.id}
      </a>
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
