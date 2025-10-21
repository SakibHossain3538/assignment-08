import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useParams,useLoaderData } from 'react-router';
const parseCount = (str) => {
  if (str.endsWith('M')) return parseFloat(str) * 1000000
  return parseFloat(str);
}
const SimpleBarChart = () => {
  const {id}=useParams()
      const appId=parseInt(id)
      const datas=useLoaderData()
      const apps=datas.find(app=>app.id===appId)
      const parseRatings=apps.ratings.map(rating=>({
        name:rating.name,
        value:parseCount(rating.count)
      }))  

  return (
    <div style={{ width: '100%', maxWidth: '700px', height: 250 }}>
      <ResponsiveContainer>
        <BarChart
          layout="vertical"
          data={parseRatings}
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
        >
          <XAxis
            type="category"
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            formatter={(value) => `${value.toLocaleString()}`}
            cursor={{ fill: 'rgba(0,0,0,0.05)' }}
          />
          <Bar
            dataKey="value"
            fill="#FF8811"
            radius={[5, 5, 5, 5]}
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleBarChart;
