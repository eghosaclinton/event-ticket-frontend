import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'
import { LogInSchema } from './schema'
import { revalidatePath } from 'next/cache'

export type State = {
    errors?: {
        email?: string[]
        password?: string[]
    }
    message?: string | null
}

export const useLogin = () => {
    const [isPending, setIsPending] = useState(false)
    const [errorMessage, setErrorMessage] = useState<State>({
        message: null,
        errors: {},
    })
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const setFormState = (target: HTMLInputElement) => {
        const { value, name } = target

        setFormData((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }
    const { replace, push, refresh } = useRouter()
    //   const callbackUrl = useSearchParams().get("callbackurl");

    const loginAction = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsPending(true)
        try {
            const parsedCredentials = LogInSchema.safeParse(formData)

            if (!parsedCredentials.success) {
                setIsPending(false)

                setErrorMessage({
                    errors: parsedCredentials.error.flatten().fieldErrors,
                    message: 'Missing Fields. Failed to Log In.',
                })

                toast.error(errorMessage.message)
            }

            await signIn('credentials', {
                ...parsedCredentials.data,
                redirect: false,
            })

            setIsPending(false)
            console.log('huh')
            refresh()
        } catch (error) {
            setIsPending(false)
            setErrorMessage({
                //@ts-expect-error ===
                message: error.message,
                //@ts-expect-error ===
                errors: error.error,
            })

            toast.error('An unexpected error occured')
        }

        // then(async (callback) => {
        //   if (callback?.url === null) {
        //     toast.error("Username or Password incorrect", {
        //       position: "top-center"
        //     });
        //     setLoading(false);
        //   }
        //   if (callback?.error === null) {
        //     const getCompany = await getIndividualCompany(email);
        //     // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        //     callbackUrl
        //       ? replace(${callbackUrl})
        //       : replace(/${getCompany.data?.company.companyName}/home);
        //   }
        // });
    }

    return {
        formData,
        setFormState,
        replace,
        loginAction,
        isPending,
        errorMessage,
    }
}
