'use client'

import React from 'react'
import ExpandableWidget from './ExpandableWidget'

const links = [
    {
        id: 1,
        title: 'Documentation',
        url: '#',
        description: 'Access project documentation and guides',
        icon: (
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
    {
        id: 2,
        title: 'Team Chat',
        url: '#',
        description: 'Connect with team members',
        icon: (
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
        ),
    },
    {
        id: 3,
        title: 'Resources',
        url: '#',
        description: 'Access shared resources and tools',
        icon: (
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        ),
    },
]

const UsefulLinks = () => {
    return (
        <ExpandableWidget title="Useful Links">
            <div className="space-y-4">
                {links.map((link) => (
                    <a
                        key={link.id}
                        href={link.url}
                        className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                        <div className="flex items-start gap-4">
                            <div className="text-gray-600 dark:text-gray-300">{link.icon}</div>
                            <div>
                                <h3 className="font-medium text-gray-900 dark:text-white">{link.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{link.description}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </ExpandableWidget>
    )
}

export default UsefulLinks 