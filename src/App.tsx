import { Header } from "./components/header";
import { Sidenav } from "./components/sidenav";
import { DataContextProvider } from "./context/data-context";
import { Resumo } from "./pages/resumo";

import "./style.css";

export function App() {
  return (
    <DataContextProvider>
      <div>
        <Sidenav />
        <main>
          <Header />
          <Resumo />
        </main>
      </div>
    </DataContextProvider>
  );
}
