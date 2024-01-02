"use client"
import React, { useRef } from 'react'
import Card from './Card'

export default function Foreground() {

    const ref = useRef()

    return (
        <>
            <div ref={ref} className="h-full w-full fixed top-0 left-0 z-[10] p-5 overflow-hidden overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
                    <Card reference={ref} />
                    <Card reference={ref} />
                    <Card reference={ref} />
                    <Card reference={ref} />
                    <Card reference={ref} />
                    <Card reference={ref} />
                    <Card reference={ref} />
                    <Card reference={ref} />
                    <Card reference={ref} />
                </div>
            </div>
        </>
    )
}