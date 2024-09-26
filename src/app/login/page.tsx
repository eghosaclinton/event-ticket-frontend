"use client"

import Login from "../ui/components/Login";
import Home from "../page";

export default function LogInPage(){
    
    return (
        <>
            <Home />
            <div 
                className="absolute top-0 left-0 w-full bg-[#00000080] flex justify-center items-center z-[99] py-8 h-full"
            >
                <Login />
            </div>
        </>
    )
}