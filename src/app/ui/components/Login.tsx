import cancelImg from '@/app/ui/assets/x-circle.svg'
import gglImg from '@/app/ui/assets/google.svg'
import Image from 'next/image'
import Link from 'next/link'
import LoginForm from '@/app/ui/components/login/Form'

export default function Login() {
    return (
        <div className="w-2/5 mx-auto my-0 rounded relative p-5 flex flex-col gap-5 bg-white">
            <Link href={'/'}>
                <button className="cancel absolute -right-2 -top-3">
                    <Image src={cancelImg} alt="" />
                </button>
            </Link>

            <div className="head flex justify-between">
                <div className="title font-medium">
                    Welcome to
                    <span className="text-blue-400"> SnapEvent</span>
                    <h3 className="text-3xl font-semibold">Sign in</h3>
                </div>
                <div className="sign-in text-[#8D8D8D] text-sm">
                    No Account? <br />
                    <Link href="/register" className="text-blue-400">
                        Sign up
                    </Link>
                </div>
            </div>

            <div id="sign-in-ggl" className="flex justify-center">
                <button className="flex p-3 justify-center gap-3 rounded w-4/5 bg-[#E9F1FF] text-[#4285F4]">
                    <Image src={gglImg} alt="" />
                    Sign in with Google
                </button>
            </div>

            <LoginForm />
        </div>
    )
}
