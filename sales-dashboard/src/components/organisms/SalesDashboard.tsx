'use client';
import { useState } from 'react';
import { salesData } from '../../data/salesData';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import BarChartComponent from '../molecules/BarChartComponent';
import LineChartComponent from '../molecules/LineChartComponent';
import PieChartComponent from '../molecules/PieChartComponent';

type ChartType = 'bar' | 'line' | 'pie';

export default function SalesDashboard() {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [chartType, setChartType] = useState<ChartType>('bar');
  const [threshold, setThreshold] = useState(0);

  const filteredData = salesData
    .filter(item => item.year === selectedYear)
    .filter(item => item.sales >= threshold);

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Sales Dashboard</h1>
        
        {/* Controls */}
        <div className="bg-gray-900 rounded-xl shadow-md p-6 mb-8 border border-gray-800">
          <div className="space-y-6">
            {/* Year Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Select Year
              </label>
              <div className="flex gap-3">
                <Button onClick={() => setSelectedYear(2022)} active={selectedYear === 2022}>
                  2022
                </Button>
                <Button onClick={() => setSelectedYear(2023)} active={selectedYear === 2023}>
                  2023
                </Button>
                <Button onClick={() => setSelectedYear(2024)} active={selectedYear === 2024}>
                  2024
                </Button>
              </div>
            </div>

            {/* Chart Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Chart Type
              </label>
              <div className="flex gap-3">
                <Button onClick={() => setChartType('bar')} active={chartType === 'bar'}>
                  Bar Chart
                </Button>
                <Button onClick={() => setChartType('line')} active={chartType === 'line'}>
                  Line Chart
                </Button>
                <Button onClick={() => setChartType('pie')} active={chartType === 'pie'}>
                  Pie Chart
                </Button>
              </div>
            </div>

            {/* Threshold Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Sales Threshold (Filter)
              </label>
              <Input 
                value={threshold} 
                onChange={setThreshold} 
                placeholder="Enter minimum sales value"
              />
            </div>
          </div>
        </div>

        {/* Chart Display */}
        <div className="bg-gray-900 rounded-xl shadow-md p-6 border border-gray-800">
          <h2 className="text-2xl font-semibold text-white mb-4">
            {selectedYear} Sales Data
          </h2>
          {chartType === 'bar' && <BarChartComponent data={filteredData} />}
          {chartType === 'line' && <LineChartComponent data={filteredData} />}
          {chartType === 'pie' && <PieChartComponent data={filteredData} />}
        </div>
      </div>
    </div>
  );
}
