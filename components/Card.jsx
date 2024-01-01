"use client"
import { EditIcon, ListTodo, Trash2 } from 'lucide-react'
import { motion } from "framer-motion"
import React from 'react'

export default function Card({ reference }) {
    return (
        <>
            <motion.div drag dragConstraints={reference} dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }} whileDrag={{ scale: 1.05 }} dragElastic={0.1} className="relative lg:flex-shrink-0 w-[360px] h-60 rounded-[20px] bg-zinc-700 leading-none overflow-hidden overflow-ellipsis p-5">
                <div className="text-amber-200"><ListTodo size={32} /></div>
                <h5 className="text-2xl text-zinc-100 mt-3">DSA</h5>
                <p className="text-zinc-500 mt-1 line-clamp-4">DSA On 10 Pm Part - 1 Lorem eligendi Lorem, ipsum dolor sit amet nam impedit id?</p>
                <div className="absolute bottom-0 left-0 w-full h-14 flex justify-around bg-zinc-600">
                    <button className="flex gap-2 items-center hover:bg-amber-200 w-full justify-center transition-colors duration-300"><EditIcon size={24} />Edit</button>
                    <button className="flex gap-2 items-center hover:bg-red-500 w-full justify-center transition-colors duration-300"><Trash2 size={24} />Remove</button>
                </div>
            </motion.div>
        </>
    )
}