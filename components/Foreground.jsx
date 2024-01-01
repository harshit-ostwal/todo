"use client"
import React, { useRef } from 'react'
import Card from './Card'

export default function Foreground() {

    const ref = useRef()

    return (
        <>
            <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 p-2 lg:p-5 flex-wrap overflow-hidden overflow-y-scroll">
                <Card reference={ref} />
            </div>
        </>
    )
}