"use client"

import Login from "../ui/components/Login";
// import { userLogIn } from "../lib/userLogic";
import Home from "../page";

export default function LogInPage(){

    // async function userLogIn(){

    //     try {
    //         const loginStatus = await fetch(`https://ticket-backend-92mj.onrender.com/api/user/login`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },            
    //             body: JSON.stringify({
    //                 email: 'akaka@gmail.com',
    //                 password: 'brah',
    //             })
    //         })
    
    //         return loginStatus
    
    //     } catch (error) {
    //         console.error(error)
    //     }
    //     // userOnBoard()
    // }
   
    
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