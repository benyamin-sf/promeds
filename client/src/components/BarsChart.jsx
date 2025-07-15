import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

export default function BarsChartComponent({ data }) {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <BarChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='month' />
        <YAxis dataKey='count' allowDecimals={false} />
        <Tooltip />
        <Bar dataKey='count' barSize={75} fill='#2cb1bc' />
      </BarChart>
    </ResponsiveContainer>
  );
}
