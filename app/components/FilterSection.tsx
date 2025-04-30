'use client'

import React from 'react'
import ExpandableWidget from './ExpandableWidget'

const FilterSection = () => {
    return (
        <ExpandableWidget title="Filters">
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Date Range
                    </label>
                    <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500">
                        <option>Last 7 days</option>
                        <option>Last 30 days</option>
                        <option>Last 3 months</option>
                        <option>Custom range</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Status
                    </label>
                    <div className="space-y-2">
                        <label className="flex items-center">
                            <input type="checkbox" className="rounded text-blue-500 focus:ring-blue-500" />
                            <span className="ml-2 text-sm text-gray-600">Completed</span>
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" className="rounded text-blue-500 focus:ring-blue-500" />
                            <span className="ml-2 text-sm text-gray-600">In Progress</span>
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" className="rounded text-blue-500 focus:ring-blue-500" />
                            <span className="ml-2 text-sm text-gray-600">Pending</span>
                        </label>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Priority
                    </label>
                    <div className="space-y-2">
                        <label className="flex items-center">
                            <input type="checkbox" className="rounded text-blue-500 focus:ring-blue-500" />
                            <span className="ml-2 text-sm text-gray-600">High</span>
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" className="rounded text-blue-500 focus:ring-blue-500" />
                            <span className="ml-2 text-sm text-gray-600">Medium</span>
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" className="rounded text-blue-500 focus:ring-blue-500" />
                            <span className="ml-2 text-sm text-gray-600">Low</span>
                        </label>
                    </div>
                </div>

                <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 mt-4">
                    Apply Filters
                </button>
            </div>
        </ExpandableWidget>
    )
}

export default FilterSection 