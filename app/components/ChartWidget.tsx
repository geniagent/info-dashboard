'use client'

import React from 'react'
import ExpandableWidget from './ExpandableWidget'

const data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 },
    { name: 'Jun', value: 700 },
]

const ChartWidget = () => {
    const maxValue = Math.max(...data.map(item => item.value))

    return (
        <ExpandableWidget title="Performance Overview">
            <div className="h-[300px] relative">
                <div className="flex h-full items-end space-x-4 px-8">
                    {data.map((item) => (
                        <div key={item.name} className="flex-1 flex flex-col items-center group">
                            <div className="relative w-full">
                                <div
                                    className="w-full bg-blue-500 rounded-t-md transition-all duration-300 group-hover:bg-blue-600"
                                    style={{
                                        height: `${(item.value / maxValue) * 100}%`,
                                    }}
                                />
                                {/* Tooltip */}
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                                    Value: {item.value}
                                </div>
                            </div>
                            <div className="mt-2 text-sm text-gray-600">{item.name}</div>
                            <div className="text-xs text-gray-500">{item.value}</div>
                        </div>
                    ))}
                </div>
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-2">
                    {[maxValue, maxValue * 0.75, maxValue * 0.5, maxValue * 0.25, 0].map((value) => (
                        <div key={value} className="text-xs text-gray-500 px-2">
                            {value}
                        </div>
                    ))}
                </div>
            </div>
            {/* Legend */}
            <div className="mt-4 flex justify-center">
                <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-sm mr-2" />
                    <span className="text-sm text-gray-600">Monthly Performance</span>
                </div>
            </div>
        </ExpandableWidget>
    )
}

export default ChartWidget 