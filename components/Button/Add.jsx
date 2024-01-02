import React from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Plus } from 'lucide-react'

export default function Add() {
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <button className="bg-amber-200 hover:bg-white transition-colors duration-300 fixed z-50 bottom-5 right-50 cursor-pointer px-10 py-5 rounded-full "><Plus size={24} /></button>
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
        </>
    )
}