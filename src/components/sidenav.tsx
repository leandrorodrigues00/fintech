import { NavLink } from "react-router-dom";

import {
  Resumo,
  Vendas,
  Webhooks,
  Configuracoes,
  Contato,
  Sair,
} from "../assets/icons";

import FintechSVG from "../assets/fintech-svg";

export function Sidenav() {
  return (
    <nav className="sidenav box bg-3">
      <FintechSVG title="Fintech logo" />
      <ul>
        <li>
          <span>
            <img src={Resumo} alt="" />
          </span>
          <NavLink to={"/"}>Resumo</NavLink>
        </li>

        <li>
          <span>
            <img src={Vendas} alt="" />
          </span>
          <NavLink to={"/vendas"}>Vendas</NavLink>
        </li>

        <li>
          <span>
            <img src={Webhooks} alt="" />
          </span>
          <a>Webhooks</a>
        </li>

        <li>
          <span>
            <img src={Configuracoes} alt="" />
          </span>
          <a>Configurações</a>
        </li>

        <li>
          <span>
            <img src={Contato} alt="" />
          </span>
          <a>Contato</a>
        </li>

        <li>
          <span>
            <img src={Sair} alt="" />
          </span>
          <a>Sair</a>
        </li>
      </ul>
    </nav>
  );
}
