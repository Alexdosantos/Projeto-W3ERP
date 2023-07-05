import { PieChart, Pie, Cell, Label } from "recharts";



const Grafics = () => {
  const data = [{ name: "Group A", value: 50 }];

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
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}

        <Label
          value={data[0].value}
          position="center"
          fill="#FFF"
          formatter={formatLabel}
        />
      </Pie>
    </PieChart>
  );
};

export default Grafics
