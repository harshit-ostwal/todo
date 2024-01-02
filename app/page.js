import Background from '@/components/Background'
import Foreground from '@/components/Foreground'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { LogOut, Plus } from 'lucide-react'
import React from 'react'

export default function page() {



  return (
    <>
      <div className="bg-zinc-800 text-zinc-900 font-VisbyRoundBold relative h-screen w-full">
        <div className="flex justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <button className="bg-amber-200 hover:bg-white transition-colors duration-300 absolute z-50 bottom-5 cursor-pointer right-50 px-10 py-5 rounded-full "><Plus size={24} /></button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>List Your Tasks</DialogTitle>
                <DialogDescription>
                  Welcome! Please use this dialog to list your tasks. Provide a title and description for each task.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-5 py-5">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="title" className="text-right">
                    Title
                  </Label>
                  <Input
                    id="title"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <Input
                    id="description"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button size={"lg"} className="rounded-xl" type="submit">Add Task</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <button className="bg-amber-200 hover:bg-white transition-colors duration-300 absolute z-50 top-5 cursor-pointer right-5 px-10 py-5 rounded-[10px] flex gap-2 items-center">Logout<LogOut size={24} /></button>
        </div>
        <Background />
        <Foreground />
      </div>
    </>
  )
}