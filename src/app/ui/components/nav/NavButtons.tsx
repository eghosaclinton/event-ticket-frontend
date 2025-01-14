'use client'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

export default function NavButtons() {
    const searchParams = useSearchParams()
    const pathName = usePathname()
    const { push } = useRouter()

    function handleParams(target: HTMLButtonElement) {
        const {id} = target
        const params = new URLSearchParams(searchParams)

        params.set("auth", id)

        push(`${pathName}?${params.toString()}`)
    }

    return (
        <div className="nav--buttons">
            <button
                id="login"
                onClick={(e) => handleParams(e.currentTarget)}
                className="bg-blue-400 text-white rounded-full font-semibold py-2 px-9"
            >
                Login
            </button>

            <button
                id="register"
                onClick={({ currentTarget }) => handleParams(currentTarget)}
                className="bg-transparent border-[1.5px] rounded-full py-2 px-9 border-white text-white"
            >
                Register
            </button>
        </div>
    )
}
