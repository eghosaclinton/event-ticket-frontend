"use client";
import { FormEvent, useState } from "react";
import Link from "next/link";

export default function NavBar(){
    const [searchData, setSearchData] = useState({
        eventName: '',
        eventDate: '',
    })

    function handleSubmit(e: FormEvent){
        e.preventDefault();
    }

    function handleChange(target: HTMLInputElement){
        const {name, value}=target

        setSearchData(prev=>{
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    return (
        <header className="bg-[#04092C] p-6">

            <div className="header-text w-[85%] mx-auto my-0 flex flex-col gap-4">
                <div className="header-top flex justify-between">
                    <h2 className="logo text-white font-bold text-4xl" style={{fontFamily: 'monospace'}}>
                        <span className="text-blue-400">S</span>napEvent
                    </h2>
                    <div className="profile flex gap-2">
                        <Link href={'/login'}>
                            <button
                                className="bg-blue-400 text-white rounded-full font-semibold py-2 px-9"
                            >Login</button>
                        </Link>

                        <Link href={'/register'}>
                            <button
                                className="bg-transparent border-[1.5px] rounded-full py-2 px-9 border-white text-white"
                            
                            >
                                Register
                            </button>
                        </Link>
                    </div>
                </div>

                <form className="header-bottom bg-white p-5 flex gap-4 rounded-md"onSubmit={handleSubmit}>
                    <input type="text" onChange={e=>handleChange(e.target)} value={searchData.eventName} name="eventDate" className="w-2/5 shadow-xl py-2 px-9 rounded-3xl" placeholder="Search by Event or Venue"/>
                    <input type="date" onChange={e=>handleChange(e.target)} value={searchData.eventDate} name="eventDate" id="" className="shadow-xl py-2 px-9 rounded-3xl" />
                    <button className="bg-blue-400 shadow-xl font-semibold text-white py-2 px-9 rounded-3xl">Search</button>
                </form>
            </div>

        </header>
    );
}