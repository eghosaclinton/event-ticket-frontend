"use client";
import { FormEvent, useState } from "react";
import cancelImg from "@/app/ui/x-circle.svg"
import gglImg from '@/app/ui/google.svg'
import Image from "next/image";
import Link from "next/link";

// type Props = {
//     checkUserStatus: (params: void)=>status: Promise
// }

export default function Login(){

    const [logInData, setLogInData] = useState({
        userEmail: '',
        userPassword: '',
    })

    function handleSubmit(e: FormEvent){
        e.preventDefault();
    }

    function handleChange(target: HTMLInputElement){
        const {name, value}=target

        setLogInData(prev=>{
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    return (
        <div className="w-2/5 mx-auto my-0 rounded relative p-5 flex flex-col gap-5 bg-white">
            <Link href={'/'}>
                <button
                    className="cancel absolute -right-2 -top-3"
                >
                    <Image
                        src={cancelImg}
                        alt=""
                    />
                </button>
            </Link>

            <div className="head flex justify-between">
                <div className="title font-medium">
                    Welcome to 
                    <span className="text-blue-400"> SnapEvent</span> 
                    <h3 className="text-3xl font-semibold">Sign in</h3>                    
                </div>
                <div className="sign-in text-[#8D8D8D] text-sm">
                    No Account? <br />
                    <a href='' className="text-blue-400">Sign up</a>
                </div>
            </div>

            <div id="sign-in-ggl" className="flex justify-center">
                <button className="flex p-3 justify-center gap-3 rounded w-4/5 bg-[#E9F1FF] text-[#4285F4]">
                    <Image 
                        src={gglImg}
                        alt=''
                    />
                    Sign in with Google
                </button>
            </div>
            
            <form className="text-sm flex flex-col gap-4" onSubmit={(e)=>handleSubmit(e)}>
                <div className="mail">
                    <label htmlFor="userEmail">Enter your username or email address</label>
                    <input onChange={(e)=>handleChange(e.target)} type="email" name="userEmail" id="userEmail" value={logInData.userEmail} className="w-full rounded-md p-4 border-black border-[1.5px] focus:border-blue-400 focus:outline-0 focus:border-[1.5px]" placeholder="Email address" />
                </div>
                <div className="password">
                    <label htmlFor="userPassword">Enter your Password</label>
                    <input type="password" name="userPassword"
                           id="userPassword" value={logInData.userPassword}
                           onChange={(e)=>handleChange(e.target)}
                           className="w-full rounded-md p-4 border-black 
                           border-[1.5px] focus:border-blue-400 focus:outline-0 focus:border-[1.5px]"
                            placeholder="Password"
                     />
                </div>
                <button className="bg-blue-400 text-white w-full rounded-md p-3">Sign in</button>
            </form>
        </div>
    );
}