import { PieChart, Pie, Cell, Label } from "recharts";

type GraficProps = {
  data?: Array<{ name: string; value: number }>;
};
const Grafics = ({ data }: GraficProps) => {
  const COLORS = ["#796CE0"];

  const formatLabel = (value: string) => {
    return `${value}%`;
  };

  return (
    <PieChart width={100} height={100}>
      <Pie
        data={data}
        cx="40%"
        cy="50%"
        innerRadius="40%"
        outerRadius="50%"
        stroke="none"
        paddingAngle={70}
        dataKey="value"
      >
        {data &&
          data.map((entry, index) => (
            <Cell key={`cell-${entry}`} fill={COLORS[index % COLORS.length]} />
          ))}

        <Label
          value={data && data[0].value}
          position="center"
          fill="#FFF"
          formatter={formatLabel}
        />
      </Pie>
    </PieChart>
  );
};

export default Grafics;
