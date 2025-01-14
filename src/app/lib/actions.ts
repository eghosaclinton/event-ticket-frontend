'use server'
import { LogInSchema } from './schema'
import { signIn, signOut } from '../../../auth'
// import { revalidatePath } from 'next/cache'
export type State = {
    errors?: {
        email?: string[]
        password?: string[]
    }
    message?: string | null
}

export async function logInUser(
    prevState: State,
    formData: FormData
): Promise<State> {
    try {
        const credentials = {
            email: formData.get('email'),
            password: formData.get('password'),
        }
        const parsedCredentials = LogInSchema.safeParse(credentials)

        if (!parsedCredentials.success) {
            return {
                errors: parsedCredentials.error.flatten().fieldErrors,
                message: 'Missing Fields. Failed to Create invoice.',
            }
        }

        await signIn('credentials', {
            ...parsedCredentials.data,
            redirect: false,
            redirectTo: '/',
        })

        return {
            message: null,
            errors: {},
        }
    } catch (error) {
        console.error(error)
        return {
            message: 'An unexpected error occured',
            errors: {},
        }
    }
}

export async function signOutUser() {
    await signOut()
}
