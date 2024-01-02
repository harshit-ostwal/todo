import Background from '@/components/Background'
import Add from '@/components/Button/Add'
import Foreground from '@/components/Foreground'
import { LogOut, Plus } from 'lucide-react'
import React from 'react'

export default function page() {

  return (
    <>
      <div className="bg-zinc-800 text-zinc-900 font-VisbyRoundBold relative h-screen w-full">
        <Background />
        <Foreground />
      </div>
    </>
  )
}