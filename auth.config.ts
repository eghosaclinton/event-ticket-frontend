import { type NextAuthConfig } from "next-auth";

export const authConfig = {
    pages: {
        signIn: '/login',

    },
    callbacks: {
        async jwt({token, user}){
            if (user){
                token.backendToken = user.backendToken
                token.fullName = user.fullName
                token.role = user.role
                token.createdAt = user.createdAt
                token.backendToken = user.backendToken
            }
            return token
        },
        async session({session, token}) {

            session.user = session.user || {}

           session.user = {
                fullName: token.fullName,
                role: token.role,
                createdAt: token.createdAt
            }
            session.backendToken = token.backendToken
            
            return session
            
        },
        authorized({ auth }) {
            const isLoggedIn = !!auth?.user
            if (!isLoggedIn){
                return false
            }

            return true
        },
    },
    providers: []
} satisfies NextAuthConfig