import Credentials from 'next-auth/providers/credentials'
import { authConfig } from './auth.config'
import NextAuth from 'next-auth'
import { revalidatePath } from 'next/cache'

export const { handlers, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            
            async authorize(credentials) {
                try {
                    console.log('huh')
                    const { email, password } = credentials
                    const data = await fetch(
                        `${process.env.API_URL}/api/user/login`,
                        {
                            method: 'POST',
                            body: JSON.stringify({ email, password }),
                            headers: { 'Content-Type': 'application/json' },
                        }
                    )

                    console.log('huh')
                    

                    const response = await data.json()

                    if (data.ok) {
                        console.log('hmm')
                        const {
                            user: { fullName, role, createdAt },
                            accessToken,
                        } = response

                        revalidatePath("/")
                        
                        return {
                            fullName,
                            role,
                            createdAt,
                            backendToken: accessToken,
                        }
                        
                    }

                    
                    throw new Error(response.message)
                } catch (error) {
                    console.log('Auth Error:', error)
                    //@ts-expect-error ----- 
                    throw new Error(error.message)
                }
            },
        }),
    ],
})
