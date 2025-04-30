'use client'

import React from 'react'
import DashboardLayout from './DashboardLayout'

interface ClientLayoutProps {
    children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
            <DashboardLayout>
                {children}
            </DashboardLayout>
        </div>
    )
} 