// components/CustomCalendar.js
import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, addMonths, subMonths } from 'date-fns';

interface CalendarEvent {
  id: number;
  title: string;
  date: string;
  color: string;
}

interface CustomCalendarProps {
  events: CalendarEvent[];
}

const CustomCalendar = ({ events = [] }: CustomCalendarProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Get day of week of first day (0 = Sunday, 6 = Saturday)
  const startDay = getDay(monthStart);

  // Create array for empty cells at beginning
  const blanks = Array.from({ length: startDay }, (_, i) =>
    <td key={`blank-${i}`} className="empty-cell"></td>
  );

  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };
  // Filter events for a specific day
  const getEventsForDay = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    console.log('events', events);
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return format(eventDate, 'yyyy-MM-dd') === dateStr;
    }).slice(0, 5); // Limit to 5 events
  };

  // Generate next month mini calendar
  const nextMonth = addMonths(currentDate, 1);
  const nextMonthStart = startOfMonth(nextMonth);
  const nextMonthEnd = endOfMonth(nextMonth);
  const nextMonthDays = eachDayOfInterval({ start: nextMonthStart, end: nextMonthEnd });

  return (
    <div className="calendar-container">
      <div className="main-calendar">
        <div className="calendar-header">
          <h1>{format(currentDate, 'MMMM yyyy')}</h1>
          <div className="calendar-controls">
            <button onClick={handlePrevMonth}>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" stroke-width="3" stroke-linecap="butt" stroke-linejoin="arcs"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button onClick={handleNextMonth}>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" stroke-width="3" stroke-linecap="butt" stroke-linejoin="arcs"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>

        <table className="calendar-table">
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            {(() => {
              let rows: React.ReactElement[] = [];
              let cells = [...blanks];

              days.forEach((day, i) => {
                const dayEvents = getEventsForDay(day);
                const isCurrentMonth = day.getMonth() === currentDate.getMonth();

                cells.push(
                  <td key={day.toString()} className={isCurrentMonth ? 'calendar-day' : 'calendar-day other-month'}>
                    <div className="day-number">{format(day, 'd')}</div>
                    <div className="day-events">
                      {dayEvents.map((event, idx) => (
                        <div key={idx} className="event" style={{ backgroundColor: event.color || '#4285f4' }}>
                          {event.title}
                        </div>
                      ))}
                      {dayEvents.length > 0 && (
                        <div className="edit-button">Edit here</div>
                      )}
                    </div>
                  </td>
                );

                // If it's Saturday (end of row) or last day of month
                if ((i + startDay + 1) % 7 === 0 || i === days.length - 1) {
                  // Fill in any remaining cells for the last row
                  const remainingCells = 7 - cells.length % 7;
                  if (remainingCells < 7) {
                    for (let j = 0; j < remainingCells; j++) {
                      cells.push(
                        <td key={`end-blank-${j}`} className="empty-cell"></td>
                      );
                    }
                  }

                  rows.push(<tr key={day.toString()}>{cells}</tr>);
                  cells = [];
                }
              });

              return rows;
            })()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomCalendar;