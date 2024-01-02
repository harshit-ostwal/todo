import { LogOut, User2 } from 'lucide-react'
import React from 'react'
import Add from './Button/Add'

export default function Background() {
    return (
        <>
            <div className="h-screen w-full fixed top-0 left-0 z-[2]">
                <h1 className="text-[13vw] leading-none tracking-tighter text-zinc-900 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">Todo.</h1>
            </div>
            <div className="h-screen w-full flex justify-center relative">
                <Add />
                <div className="fixed z-20 top-5 right-5 flex gap-2">
                    <button className="bg-amber-200 hover:bg-white transition-colors duration-300 cursor-pointer px-10 py-5 rounded-[10px] flex gap-2 items-center">Logout<LogOut size={24} /></button>
                    <button className="hover:bg-white hover:text-zinc-900 border border-zinc-50 text-zinc-50 transition-colors duration-300 cursor-pointer px-5 py-5 rounded-full"><User2 size={24} /></button>
                </div>
            </div>
        </>
    )
}