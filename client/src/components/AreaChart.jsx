import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

export default function AreaChartComponent({ data }) {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <AreaChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='month' />
        <YAxis dataKey='count' allowDecimals={false} />
        <Tooltip />
        <Area dataKey='count' type='monotone' stroke='#bef8fd' fill='#2cb1bc' />
      </AreaChart>
    </ResponsiveContainer>
  );
}
