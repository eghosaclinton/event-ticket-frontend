function userOnBoard(){
        console.log('userOnboarded')
}

export async function userLogIn(email: string, password: string){

        try {
            const loginStatus = await fetch(`https://ticket-backend-92mj.onrender.com/api/user/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },            
                body: JSON.stringify({
                    email,
                    password,
                })
            })
    
            return loginStatus
    
        } catch (error) {
            console.error(error)
        }
        userOnBoard()
}

export function userLogOut(){
    
}

export async function userRegister(email: string, password: string, fullName: string, role: string){
    try {
        const registerUser = await fetch(`https://ticket-backend-92mj.onrender.com/api/user/register`, {
            method: "POST",
            // headers: {
            //     "Content-Type": "application/json",
            // },            
            body: JSON.stringify({
                email,
                password: password,
                fullName: fullName,        
                role,
            })
        })

        console.log(registerUser)

    } catch (error) {
        console.error(error)
    }
}