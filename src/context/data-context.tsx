import { createContext, ReactNode, useContext, useState } from "react";

import { VendaConfig } from "../types";
import { getDaysAgo } from "../lib/utils";
import useFetch from "../hooks/useFetch";

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
