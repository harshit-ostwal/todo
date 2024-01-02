import React from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { EditIcon } from 'lucide-react'

export default function Edit() {
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <button className="flex gap-2 items-center hover:bg-amber-200 w-full justify-center transition-colors duration-300"><EditIcon size={24} />Edit</button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                        <DialogTitle>Update Your Tasks</DialogTitle>
                        <DialogDescription>
                            Welcome! Please use this dialog to update your tasks. Provide a title and description for each task.
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
                        <Button size={"lg"} className="rounded-xl" type="submit">Update Task</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
