import { Header } from "./components/header";
import { Sidenav } from "./components/sidenav";
import { DataContextProvider } from "./context/data-context";
import { Resumo } from "./pages/resumo";
import { Vendas } from "./pages/vendas";

import "./style.css";

export function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Resumo />
          <Vendas />
        </main>
      </div>
    </DataContextProvider>
  );
}
