'use client';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { SalesData } from '../../data/salesData';

interface BarChartComponentProps {
  data: SalesData[];
}

export default function BarChartComponent({ data }: BarChartComponentProps) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#3b82f6" />
      </BarChart>
    </ResponsiveContainer>
  );
}
