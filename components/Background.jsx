import React from 'react'

export default function Background() {
    return (
        <>
            <div className="h-screen w-full fixed top-0 left-0 z-[2]">
                <h1 className="text-[13vw] leading-none tracking-tighter text-zinc-900 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">Todo.</h1>
            </div>
        </>
    )
}