import React from 'react';
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const studentMarks = [
        { id: 1, name: "Alice", math: 78, physics: 82, chemistry: 75 },
        { id: 2, name: "Bob", math: 85, physics: 78, chemistry: 88 },
        { id: 3, name: "Charlie", math: 92, physics: 89, chemistry: 94 },
        { id: 4, name: "David", math: 74, physics: 76, chemistry: 70 },
        { id: 5, name: "Eve", math: 88, physics: 84, chemistry: 80 },
        { id: 6, name: "Frank", math: 67, physics: 72, chemistry: 65 },
        { id: 7, name: "Grace", math: 90, physics: 91, chemistry: 89 },
        { id: 8, name: "Hannah", math: 80, physics: 79, chemistry: 78 },
        { id: 9, name: "Ian", math: 76, physics: 70, chemistry: 72 },
        { id: 10, name: "Jack", math: 84, physics: 85, chemistry: 83 }
      ];
      
      
    return (
        <div>
            <LChart width={800} height={400} data={studentMarks}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke="red"></Line>
                <Line dataKey="physics" stroke="yellow"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;