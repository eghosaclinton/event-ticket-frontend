"use client"
import Register from "../ui/components/Register";
import Home from "../page";

export default function RegisterPage(){

    return (
        <>
            <Home />
            <div 
                className="absolute top-0 left-0 w-full bg-[#00000080] flex justify-center items-center z-[99] py-8"
            >
                <Register />
            </div>
        </>
    )
}