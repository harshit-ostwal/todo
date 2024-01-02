"use client"
import { EditIcon, ListTodo, Trash2 } from 'lucide-react'
import { motion } from "framer-motion"
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog'

export default function Card({ reference }) {
    return (
        <>
            <motion.div drag dragConstraints={reference} dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }} whileDrag={{ scale: 1.05 }} dragElastic={0.1} className="relative lg:flex-shrink-0 w-[360px] h-60 rounded-[20px] bg-zinc-700 leading-none overflow-hidden overflow-ellipsis p-5">
                <div className="text-amber-200"><ListTodo size={32} /></div>
                <h5 className="text-2xl text-zinc-100 mt-3">DSA</h5>
                <p className="text-zinc-500 mt-1 line-clamp-4">DSA On 10 Pm Part - 1 Lorem eligendi Lorem, ipsum dolor sit amet nam impedit id?</p>
                <div className="absolute bottom-0 left-0 w-full h-14 flex justify-around bg-zinc-600">
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
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <button className="flex gap-2 items-center hover:bg-red-500 w-full justify-center transition-colors duration-300"><Trash2 size={24} />Remove</button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </motion.div>
        </>
    )
}