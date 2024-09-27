"use client";
import { FormEvent, useState } from "react";
import cancelImg from "@/app/ui/assets/x-circle.svg"
import gglImg from '@/app/ui/assets/google.svg'
import { userRegister } from "@/app/lib/userLogic";
import Image from "next/image";
import { toast } from "sonner";
import Link from "next/link";

export default function Register(){
    const [registerData, setRegisterData] = useState({
        firstName: '',
        lastName: '',
        userMail: '',
        userPassword: '',
        userRole: '',
    })

    function handleSubmit(e: FormEvent){
        e.preventDefault();

        const {firstName, lastName, userMail, userPassword, userRole} = registerData;

        const fullName = firstName+' '+lastName

        // userRegister(userMail, userPassword, fullName, userRole)

        toast.promise(()=>userRegister(userMail, userPassword, fullName, userRole), {
            loading: 'Loading...',
            success: () => {
              return `Register Success`;
            },
            error: 'Failed',
        })
    }

    function handleChange(target: HTMLInputElement | HTMLSelectElement){
        const {name, value}=target

        setRegisterData(prev=>{
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
                    <h3 className="text-3xl font-semibold">Register</h3>                    
                </div>
                <div className="sign-in text-[#8D8D8D] text-sm">
                    Have an Account? <br />
                    <a href='' className="text-blue-400">Sign in</a>
                </div>
            </div>

            <div id="sign-in-ggl" className="flex justify-center">
                <button className="flex p-3 justify-center gap-3 rounded w-4/5 bg-[#E9F1FF] text-[#4285F4]">
                    <Image 
                        src={gglImg}
                        alt=''
                    />
                    Sign up with Google
                </button>
            </div>
            
            <form className="text-sm flex flex-col gap-4" onSubmit={handleSubmit}>

                <div className="firstName">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" onChange={e=>handleChange(e.target)} value={registerData.firstName} id="firstName" className="w-full rounded-md p-4 border-black border-[1.5px] focus:border-blue-400 focus:outline-0 focus:border-[1.5px]" placeholder="First Name" />
                </div>

                <div className="lastName">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" onChange={e=>handleChange(e.target)} value={registerData.lastName} id="lastName" className="w-full rounded-md p-4 border-black border-[1.5px] focus:border-blue-400 focus:outline-0 focus:border-[1.5px]" placeholder="Last Name" />
                </div>

                <select name="userRole" id="userRole" onChange={e=>handleChange(e.target)} value={registerData.userRole} className="w-3/5 p-2 border-black rounded-md border-[1.5px] focus:border-blue-400 focus:outline-0 focus:border-[1.5px]">
                    <option value="">--Choose a Role--</option>
                    <option value="admin">Event planner</option>
                    <option value="user">Event Finder</option>
                </select>
                
                <div className="mail">
                    <label htmlFor="userMail">Enter your username or email address</label>
                    <input type="email" onChange={e=>handleChange(e.target)} value={registerData.userMail} name="userMail" id="userMail" className="w-full rounded-md p-4 border-black border-[1.5px] focus:border-blue-400 focus:outline-0 focus:border-[1.5px]" placeholder="Email address" />
                </div>

                <div className="password">
                    <label htmlFor="userPassword">Enter your Password</label>
                    <input type="password" value={registerData.userPassword} onChange={e=>handleChange(e.target)} name="userPassword" id="userPassword" className="w-full rounded-md p-4 border-black border-[1.5px] focus:border-blue-400 focus:outline-0 focus:border-[1.5px]" placeholder="Password" />
                </div>
                <button className="bg-blue-400 text-white w-full rounded-md p-3">Sign Up</button>
            </form>
        </div>
    );
}