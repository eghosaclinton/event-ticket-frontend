'use client'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Login from './ui/components/Login'
import Register from './ui/components/Register'
import Carousel from './ui/components/Carousel'
import BrowseItems from './ui/components/BrowseItem'
import filterVector from '@/app/ui/assets/filter-icon.svg'

export default function Home() {
    const searchParams = useSearchParams()
    const authState = searchParams.has('auth')
    return (
        <>
            <div className="w-4/5 my-auto mx-auto flex flex-col gap-8">
                <Carousel />
                <BrowseItems />
                <section>
                    <div className="heading flex justify-between items-center border-b-[1.5px] border-[#D9D9D9] p-4">
                        <h3 className="text-2xl font-bold">
                            Top Picks Near You
                        </h3>
                        <button className="flex items-center gap-2 font-medium px-4 py-2 rounded-full">
                            <Image src={filterVector} alt="" /> Filter
                        </button>
                    </div>
                    <div className="items flex gap-4">{/* {BrowseArr} */}</div>
                </section>
            </div>

            {authState && (
                <div className="fixed inset-0 backdrop-blur-sm w-full bg-[#00000080] flex justify-center items-center z-[99] py-8 h-full">
                    {searchParams.get('auth') == 'login' ? (
                        <Login />
                    ) : (
                        <Register />
                    )}
                </div>
            )}
        </>
    )
}
