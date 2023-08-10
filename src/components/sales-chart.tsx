import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { VendaConfig } from "../types";

interface SalesChartProps {
  data: VendaConfig[];
}

const chartData = [
  {
    data: "2023-08-10",
    pago: 3000,
    processando: 1031,
    falha: 200,
  },
  {
    data: "2023-08-11",
    pago: 3000,
    processando: 1031,
    falha: 20,
  },

  {
    data: "2023-08-12",
    pago: 100,
    processando: 201,
    falha: 100,
  },
];

export function SalesChart({ data }: SalesChartProps) {
  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart data={chartData}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#A36AF9" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#FBCB21"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="falha"
          stroke="#000000"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
