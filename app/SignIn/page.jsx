"use client"
import { Input } from '@/components/ui/input';
import { LogIn } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

export default function page() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <div className="bg-zinc-800 text-zinc-950 h-screen w-full font-VisbyRoundBold flex flex-col items-center justify-center overflow-hidden">
                <h1 className="text-amber-100 text-2xl md:text-4xl">SignIn Into Your Account?</h1>
                <div className="w-[95%] md:w-[50%] lg:w-[30%] text-center mt-20">
                    <form className="flex flex-col gap-2">
                        <Input onChange={(e) => setEmail(e.target.value)} className="rounded-[10px] h-14 text-base" type="email" placeholder="Email" />
                        <Input onChange={(e) => setPassword(e.target.value)} className="rounded-[10px] h-14 text-base" type="password" placeholder="Password" />
                        <button className="bg-amber-200 hover:bg-white mt-8 transition-colors duration-300 py-5 rounded-[20px] flex items-center justify-center gap-2" type="submit">Sign In<LogIn size={24} /></button>
                    </form >
                    <p className="mt-2 text-zinc-400">Or</p>
                    <button className="bg-amber-200 hover:bg-white mt-2 mb-2 transition-colors duration-300 w-full py-5 rounded-[20px] flex items-center justify-center gap-2">
                        <Image src={"/Google.png"} width={24} height={24} alt='Google' quality={100} />
                        Sign In With Google
                    </button>
                    <Link href={"/SignUp"} className="text-zinc-400 underline">New User Registration? SignUp</Link>
                </div>
            </div>
        </>
    )
}