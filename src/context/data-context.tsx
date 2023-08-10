import { createContext, ReactNode, useContext, useState } from "react";
import useFetch from "../hooks/useFetch";

interface VendaConfig {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "cartao" | "pix";
  data: string;
  parcelas: number | null;
}

interface DataContextConfig {
  data: VendaConfig[] | null;
  loading: boolean;
  error: string | null;
  inicio: string;
  final: string;

  setInicio: React.Dispatch<React.SetStateAction<string>>;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
}

const DataContext = createContext<DataContextConfig | null>(null);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData precisa estar em DataProvider");
  return context;
};

interface DataProviderProps {
  children: ReactNode;
}

function getDaysAgo(n: number) {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

export const DataContextProvider = ({ children }: DataProviderProps) => {
  const [inicio, setInicio] = useState(getDaysAgo(14));
  const [final, setFinal] = useState(getDaysAgo(0));

  const { data, loading, error } = useFetch<VendaConfig[]>(
    `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
  );

  return (
    <DataContext.Provider
      value={{ data, loading, error, inicio, setInicio, final, setFinal }}
    >
      {children}
    </DataContext.Provider>
  );
};
