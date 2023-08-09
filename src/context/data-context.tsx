import { createContext, ReactNode, useContext } from "react";
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

export const DataContextProvider = ({ children }: DataProviderProps) => {
  const { data, loading, error } = useFetch<VendaConfig[]>(
    "https://data.origamid.dev/vendas/"
  );

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
