import { useData } from "../context/data-context";

export function Resumo() {
  const { data } = useData();

  return <div>resumo</div>;
}
