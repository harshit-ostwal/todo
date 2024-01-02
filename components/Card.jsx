"use client"
import { ListTodo } from 'lucide-react'
import { motion } from "framer-motion"
import React from 'react'
import Edit from './Button/Edit'
import Remove from './Button/Remove'

export default function Card({ reference }) {
    const isLargeScreen = window.innerWidth >= 1024;
    
    return (
        <>
            {isLargeScreen ? (
                <motion.div drag dragConstraints={reference} dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }} whileDrag={{ scale: 1.05 }} dragElastic={0.1} className="relative max-w-sm h-60 rounded-[20px] bg-zinc-700 leading-none overflow-hidden overflow-ellipsis p-5">
                    <div className="text-amber-200"><ListTodo size={32} /></div>
                    <h5 className="text-2xl text-zinc-100 mt-3">DSA</h5>
                    <p className="text-zinc-500 text-sm mt-1 line-clamp-3">DSA On 10 Pm Part - 1 Lorem e id?</p>
                    <div className="absolute bottom-0 left-0 w-full h-14 flex justify-around bg-zinc-600">
                        <Edit />
                        <Remove />
                    </div>
                </motion.div>
            ) : (
                <div className="relative max-w-sm h-60 rounded-[20px] bg-zinc-700 leading-none overflow-hidden overflow-ellipsis p-5">
                    <div className="text-amber-200"><ListTodo size={32} /></div>
                    <h5 className="text-2xl text-zinc-100 mt-3">DSA</h5>
                    <p className="text-zinc-500 text-sm mt-1 line-clamp-3">DSA On 10 Pm Part - 1 Lorem e id?</p>
                    <div className="absolute bottom-0 left-0 w-full h-14 flex justify-around bg-zinc-600">
                        <Edit />
                        <Remove />
                    </div>
                </div>
            )}
        </>
    )
}