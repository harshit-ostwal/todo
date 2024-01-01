import Background from '@/components/Background'
import Foreground from '@/components/Foreground'
import { LogOut, Plus } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <>
      <div className="bg-zinc-800 text-zinc-900 font-VisbyRoundBold relative h-screen w-full">
        <div className="flex justify-center">
          <button className="bg-amber-200 hover:bg-fuchsia-200 transition-colors duration-300 absolute z-50 bottom-5 cursor-pointer right-50 px-10 py-5 rounded-full "><Plus size={24} /></button>
          <button className="bg-amber-200 hover:bg-fuchsia-200 transition-colors duration-300 absolute z-50 top-5 cursor-pointer right-5 px-10 py-5 rounded-[10px] flex gap-2 items-center">Logout<LogOut size={24} /></button>
        </div>
        <Background />
        <Foreground />
      </div>
    </>
  )
}