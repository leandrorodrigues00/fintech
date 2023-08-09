import { Header } from "./components/header";
import { Sidenav } from "./components/sidenav";
import { Resumo } from "./pages/resumo";

import "./style.css";

export function App() {
  return (
    <>
      <Sidenav />
      <main>
        <Header />
        <Resumo />
      </main>
    </>
  );
}
