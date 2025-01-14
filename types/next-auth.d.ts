import 'next-auth'

interface IUser {
    backendToken: string
    fullName: string
    role: string
    createdAt: string
}

declare module 'next-auth' {

    interface SessionUser extends Omit<IUser, "backendToken">{}
    
    interface Session{
        user: SessionUser
        backendToken: string
    }

    interface User extends IUser{}

    interface JWT extends IUser{}
}