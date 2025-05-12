// components/CustomCalendar.js
import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, addMonths, subMonths, isWeekend, parseISO } from 'date-fns';

interface CalendarEvent {
  id: number;
  title: string;
  date: string;
  color: string;
}

interface CustomCalendarProps {
  events: CalendarEvent[];
  onEventUpdate?: (eventId: number, newDate: string) => void;
}

const CustomCalendar = ({ events = [], onEventUpdate }: CustomCalendarProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [draggedEvent, setDraggedEvent] = useState<CalendarEvent | null>(null);
  const [dragOverDate, setDragOverDate] = useState<Date | null>(null);

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Filter out weekends
  const weekdaysOnly = days.filter(day => !isWeekend(day));

  // Get day of week of first day (1 = Monday, 5 = Friday)
  // Adjust for weekday-only view (Monday is the first day)
  const firstWeekdayOfMonth = weekdaysOnly[0];
  const startDay = getDay(firstWeekdayOfMonth);
  const adjustedStartDay = startDay === 0 ? 0 : startDay - 1; // Adjust to start from Monday (0)

  // Create array for empty cells at beginning if first day is not Monday
  const blanks = Array.from({ length: adjustedStartDay }, (_, i) =>
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
    return events.filter(event => {
      const eventDate = parseISO(event.date);
      return format(eventDate, 'yyyy-MM-dd') === dateStr;
    }).slice(0, 5); // Limit to 5 events
  };

  const handleDragStart = (event: React.DragEvent, calendarEvent: CalendarEvent) => {
    setDraggedEvent(calendarEvent);
    event.dataTransfer.setData('text/plain', calendarEvent.id.toString());
    // Add a semi-transparent effect to the dragged element
    if (event.target instanceof HTMLElement) {
      event.target.style.opacity = '0.5';
    }
  };

  const handleDragEnd = (event: React.DragEvent) => {
    // Reset opacity
    if (event.target instanceof HTMLElement) {
      event.target.style.opacity = '1';
    }
    setDraggedEvent(null);
    setDragOverDate(null);
  };

  const handleDragOver = (event: React.DragEvent, date: Date) => {
    event.preventDefault();
    setDragOverDate(date);
  };

  const handleDragLeave = () => {
    setDragOverDate(null);
  };

  const handleDrop = (event: React.DragEvent, targetDate: Date) => {
    event.preventDefault();
    if (draggedEvent && onEventUpdate) {
      // Ensure we're using the correct date format
      const newDate = format(targetDate, 'yyyy-MM-dd');
      onEventUpdate(draggedEvent.id, newDate);
    }
    setDraggedEvent(null);
    setDragOverDate(null);
  };

  return (
    <div className="calendar-container">
      <div className="main-calendar">
        <div className="calendar-header">
          <h1>{format(currentDate, 'MMMM yyyy')}</h1>
          <div className="calendar-controls">
            <button onClick={handlePrevMonth}>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="3" strokeLinecap="butt" strokeLinejoin="miter"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button onClick={handleNextMonth}>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="3" strokeLinecap="butt" strokeLinejoin="miter"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>

        <table className="calendar-table">
          <thead>
            <tr>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
            </tr>
          </thead>
          <tbody>
            {(() => {
              let rows: React.ReactElement[] = [];
              let cells = [...blanks];

              weekdaysOnly.forEach((day, i) => {
                const dayEvents = getEventsForDay(day);
                const isCurrentMonth = day.getMonth() === currentDate.getMonth();
                const isDragOver = dragOverDate && format(dragOverDate, 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd');

                cells.push(
                  <td
                    key={day.toString()}
                    className={`calendar-day ${isCurrentMonth ? '' : 'other-month'} ${isDragOver ? 'drag-over' : ''}`}
                    onDragOver={(e) => handleDragOver(e, day)}
                    onDragLeave={handleDragLeave}
                    onDrop={(e) => handleDrop(e, day)}
                  >
                    <div className="day-number">{format(day, 'd')}</div>
                    <div className="day-events">
                      {dayEvents.map((event, idx) => (
                        <div
                          key={idx}
                          className="event"
                          style={{ backgroundColor: event.color || '#4285f4' }}
                          draggable
                          onDragStart={(e) => handleDragStart(e, event)}
                          onDragEnd={handleDragEnd}
                        >
                          {event.title}
                        </div>
                      ))}
                      {dayEvents.length > 0 && (
                        <div className="edit-button">Edit here</div>
                      )}
                    </div>
                  </td>
                );

                // If it's Friday (end of row) or last day of month
                if ((getDay(day) === 5) || i === weekdaysOnly.length - 1) {
                  // Fill in any remaining cells for the last row
                  const remainingCells = 5 - cells.length % 5;
                  if (remainingCells < 5) {
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