import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Sales } from "./pages/sales";
import { Sale } from "./pages/sale";
import { Summary } from "./pages/summary";
import { Header } from "./components/header";
import { Sidenav } from "./components/sidenav";
import { DataContextProvider } from "./context/data-context";

import "./style.css";

export function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Summary />} />
              <Route path="/vendas" element={<Sales />} />
              <Route path="/vendas/:id" element={<Sale />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
}
