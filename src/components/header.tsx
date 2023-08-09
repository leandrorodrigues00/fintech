import React from "react";
import { useData } from "../context/data-context";

export function Header() {
  const { data } = useData();

  console.log(data);

  return <div>header</div>;
}
