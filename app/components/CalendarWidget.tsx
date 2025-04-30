'use client'

import React, { useState } from 'react'
import ExpandableWidget from './ExpandableWidget'

const CalendarWidget = () => {
    const [date, setDate] = useState(new Date().toISOString().split('T')[0])

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value)
    }

    return (
        <ExpandableWidget title="Calendar">
            <div className="h-[300px] relative calendar-container">
                <input
                    type="date"
                    value={date}
                    onChange={handleDateChange}
                    className="w-full p-2 border rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
            </div>
            <div className="mt-4 text-sm text-gray-600">
                Selected date: {new Date(date).toLocaleDateString()}
            </div>
            <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Upcoming Events</h3>
                <div className="space-y-2">
                    <div className="p-2 bg-blue-50 rounded-md">
                        <p className="text-sm font-medium text-blue-800">Team Meeting</p>
                        <p className="text-xs text-blue-600">10:00 AM - 11:00 AM</p>
                    </div>
                    <div className="p-2 bg-green-50 rounded-md">
                        <p className="text-sm font-medium text-green-800">Project Review</p>
                        <p className="text-xs text-green-600">2:00 PM - 3:00 PM</p>
                    </div>
                </div>
            </div>
        </ExpandableWidget>
    )
}

export default CalendarWidget 