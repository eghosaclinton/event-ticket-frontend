const URL = `https://ticket-backend-92mj.onrender.com/api/user/`




function userOnBoard(){
        
}

export async function userLogIn(){

    try {
        const loginStatus = await fetch(`${URL}login/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },            
            body: JSON.stringify({
                email: 'akaka@gmail.com',
                password: 'brah',
            })
        })

        return loginStatus

    } catch (error) {
        console.error(error)
    }
    // userOnBoard()
}

export function userLogOut(){
    
}

export function userRegister(){
    
}