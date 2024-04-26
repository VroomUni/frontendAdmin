import React from 'react';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "./UserActivityChart.css";

function UserActivityChart() {
    // Updated data with only Active Users and New Users
    const data = [
        { month: "January", NewUsers: 200, ActiveUsers: 800 },
        { month: "February", NewUsers: 240, ActiveUsers: 850 },
        { month: "March", NewUsers: 180, ActiveUsers: 900 },
        { month: "April", NewUsers: 220, ActiveUsers: 950 },
        { month: "May", NewUsers: 200, ActiveUsers: 1000 },
        { month: "June", NewUsers: 230, ActiveUsers: 1100 },
    ];
    return (
        <div className="chart" style={{ height: '400px', width: '600px', marginLeft: '20%' }}>
          <div className="titleChart">
            Last 6 months (User Activity)
          </div>
          <ResponsiveContainer width="100%" aspect={2 / 1}>
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorNewUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorActiveUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#04befe" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#04befe" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="gray"/>
              <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
              <Tooltip />
              <Area type="monotone" dataKey="NewUsers" stroke="#82ca9d" fillOpacity={1} fill="url(#colorNewUsers)" />
              <Area type="monotone" dataKey="ActiveUsers" stroke="#8884d8" fillOpacity={1} fill="url(#colorActiveUsers)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
    );
}

export default UserActivityChart;
