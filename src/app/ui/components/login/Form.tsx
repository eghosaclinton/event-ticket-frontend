'use client'
import clsx from 'clsx'
import { useLogin } from '@/app/lib/hooks'

export default function LoginForm() {
    const { loginAction, errorMessage, formData, setFormState, isPending } =
        useLogin()
    const { email, password } = formData
    console.log(errorMessage)
    return (
        <form onSubmit={loginAction} className="text-sm flex flex-col gap-4">
            <div className="mail">
                <label htmlFor="email">
                    Enter your username or email address
                </label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setFormState(e.target)}
                    id="email"
                    className="w-full rounded-md p-4 border-black border-[1.5px] focus:border-blue-400 focus:outline-0 focus:border-[1.5px]"
                    placeholder="Email address"
                    required
                />
            </div>
            <div className="password">
                <label htmlFor="password">Enter your Password</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setFormState(e.target)}
                    id="password"
                    className="w-full rounded-md p-4 border-black border-[1.5px] focus:border-blue-400 focus:outline-0 focus:border-[1.5px]"
                    placeholder="Password"
                    required
                />
            </div>
            <button
                disabled={isPending}
                className={clsx(
                    'bg-blue-400 text-white w-full rounded-md p-3',
                    isPending && 'bg-blue-200'
                )}
            >
                {isPending ? 'Signing In...' : 'Sign in'}
            </button>
        </form>
    )
}
