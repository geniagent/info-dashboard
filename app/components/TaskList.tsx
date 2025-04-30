'use client'

import React from 'react'
import ExpandableWidget from './ExpandableWidget'

const tasks = [
    {
        id: 1,
        title: 'Complete project proposal',
        status: 'In Progress',
        priority: 'High',
        dueDate: '2024-03-20',
    },
    {
        id: 2,
        title: 'Review team performance',
        status: 'Pending',
        priority: 'Medium',
        dueDate: '2024-03-22',
    },
    {
        id: 3,
        title: 'Update documentation',
        status: 'Completed',
        priority: 'Low',
        dueDate: '2024-03-18',
    },
]

const TaskList = () => {
    return (
        <ExpandableWidget title="Tasks">
            <div className="flex justify-end mb-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600">
                    Add Task
                </button>
            </div>
            <div className="space-y-4">
                {tasks.map((task) => (
                    <div
                        key={task.id}
                        className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="font-medium">{task.title}</h3>
                                <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
                            </div>
                            <div className="flex gap-2">
                                <span className={`
                                    px-2 py-1 rounded-full text-xs
                                    ${task.priority === 'High' ? 'bg-red-100 text-red-800' : ''}
                                    ${task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' : ''}
                                    ${task.priority === 'Low' ? 'bg-green-100 text-green-800' : ''}
                                `}>
                                    {task.priority}
                                </span>
                                <span className={`
                                    px-2 py-1 rounded-full text-xs
                                    ${task.status === 'Completed' ? 'bg-green-100 text-green-800' : ''}
                                    ${task.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : ''}
                                    ${task.status === 'Pending' ? 'bg-gray-100 text-gray-800' : ''}
                                `}>
                                    {task.status}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </ExpandableWidget>
    )
}

export default TaskList 