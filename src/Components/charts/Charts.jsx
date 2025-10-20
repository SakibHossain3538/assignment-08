import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 200, pv: 9800, amt: 2290 },
];

const Charts = (
  <BarChart
    width={600}
    height={300}
    data={data}
    layout="vertical" // This makes bars horizontal
    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
  >
    <XAxis type="number" stroke="#8884d8" />  {/* now X is numeric */}
    <YAxis type="category" dataKey="name" stroke="#8884d8" /> {/* now Y is category */}
    <Tooltip />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="uv" fill="#8884d8" barSize={20} />
  </BarChart>
);

export default Charts;
