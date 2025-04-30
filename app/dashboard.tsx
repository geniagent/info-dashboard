'use client'

import TaskList from './components/TaskList'
import ChartWidget from './components/ChartWidget'
import CalendarWidget from './components/CalendarWidget'
import UsefulLinks from './components/UsefulLinks'
import FilterSection from './components/FilterSection'
import CustomCalendar from './components/CustomCalendar'
import './styles/custom-calendar.css'
import { useEffect, useState } from 'react'

// Define the event interface
interface CalendarEvent {
    id: number;
    title: string;
    date: string;
    color: string;
}

export default function Dashboard() {

    const [events, setEvents] = useState<CalendarEvent[]>([]);

    useEffect(() => {
        // Sample event data - in a real app, you would fetch this from an API
        const sampleEvents: CalendarEvent[] = [
            { id: 1, title: 'Team Meeting', date: '2025-02-03', color: '#e74c3c' },
            { id: 2, title: 'Product Launch', date: '2025-03-08', color: '#3498db' },
            { id: 3, title: 'Marketing Call', date: '2025-02-11', color: '#2ecc71' },
            { id: 4, title: 'Client Presentation', date: '2025-03-13', color: '#f39c12' },
            { id: 5, title: 'Team Building', date: '2025-02-16', color: '#9b59b6' },
            { id: 6, title: 'Strategy Meeting', date: '2025-03-18', color: '#1abc9c' },
            { id: 7, title: 'Conference Call', date: '2025-02-22', color: '#e67e22' },
            { id: 8, title: 'Project Deadline', date: '2025-03-27', color: '#e74c3c' },
            // Adding multiple events on the same day to test the 5 event limit
            { id: 9, title: 'Budget Review', date: '2025-02-16', color: '#34495e' },
            { id: 10, title: 'Department Meeting', date: '2025-03-16', color: '#16a085' },
            { id: 11, title: 'Team Lunch', date: '2025-02-16', color: '#d35400' },
            { id: 12, title: 'Client Call', date: '2025-03-16', color: '#8e44ad' },
            { id: 13, title: 'Training Session', date: '2025-02-16', color: '#2c3e50' },
        ];

        setEvents(sampleEvents);
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            <div className="lg:col-span-2">
                <ChartWidget />
            </div>
            <div>
                <FilterSection />
            </div>
            <div className="lg:col-span-2">
                <CustomCalendar events={events} />
            </div>
            {/* <div className="lg:col-span-2">
                <CalendarWidget />
            </div> */}
            <div className="lg:col-span-3">
                <TaskList />
            </div>
            <div>
                <UsefulLinks />
            </div>
        </div>
    )
} 