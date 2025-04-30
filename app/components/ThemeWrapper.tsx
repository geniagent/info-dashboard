'use client'

import React from 'react'
import { ThemeProvider } from './ThemeProvider'
import ThemeToggle from './ThemeToggle'

export default function ThemeWrapper() {
    return (
        <ThemeProvider>
            <ThemeToggle />
        </ThemeProvider>
    )
} 