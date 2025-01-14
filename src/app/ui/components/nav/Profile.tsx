'use client'
import { useState } from 'react'
import { FaPowerOff } from 'react-icons/fa'
import { RiArrowDropDownLine } from 'react-icons/ri'
import NavButtons from './NavButtons'
import { type SessionUser } from 'next-auth'
import clsx from 'clsx'
import { signOutUser } from '@/app/lib/actions'

export default function UserProfile({
    user,
}: {
    user: SessionUser | undefined
}) {
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    return (
        <div className="profile text-white relative flex gap-2 items-center">
            {user ? (
                <>
                    <h2>{user.fullName}</h2>
                    <button
                        className=""
                        onClick={() => setIsMenuClicked((prev) => !prev)}
                    >
                        <RiArrowDropDownLine
                            className={clsx(
                                'w-10',
                                isMenuClicked && 'rotate-180'
                            )}
                            color="#ffffff"
                        />
                    </button>
                    {isMenuClicked && (
                        <ul className="absolute -bottom-8 profile--menu bg-white text-sm border-black border p-2 list-none">
                            <li className="">
                                <form action={signOutUser}>
                                    <button className="flex items-center gap-1 text-black">
                                        <FaPowerOff color="red" />
                                        Sign Out
                                    </button>
                                </form>
                            </li>
                        </ul>
                    )}
                </>
            ) : (
                <NavButtons />
            )}
        </div>
    )
}
