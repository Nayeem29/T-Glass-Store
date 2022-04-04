import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { BarChart, Bar, Legend, PieChart, Pie, AreaChart, Area } from 'recharts';


const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  const renderLineChart = (
    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="sell" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );

  const renderBarChart = (
    <BarChart width={630} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="investment" fill="#8884d8" />
      <Bar dataKey="revenue" fill="#82ca9d" />
    </BarChart>
  );

  const renderPieChart = (

    <PieChart width={600} height={300}>
      <Pie data={data} dataKey="revenue" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
      <Pie data={data} dataKey="investment" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
      <Tooltip />
    </PieChart>
  );

  const renderAreaChart = (
    <AreaChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
      <Area type="monotone" dataKey="investment" stroke="#00FF00" fill="#82ca9d" />
    </AreaChart>
  );

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mx-auto my-12'>
      <div className='monthly-sell'>
        {
          renderLineChart
        }
        <p className='flex justify-center font-bold text-2xl text-blue-500'>
          Monthly Sell
        </p>
      </div>
      <div className='my-16'>
        {
          renderBarChart
        }
      </div>
      <div>
        {
          renderPieChart
        }
      </div>
      <div>
        {
          renderAreaChart
        }
      </div>
    </div>
  );
};

export default Dashboard;