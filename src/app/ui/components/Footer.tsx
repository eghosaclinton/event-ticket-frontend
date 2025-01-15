import Image from 'next/image'
import msgIcon from '@/app/ui/assets/message-icon.svg'
import phoneIcon from '@/app/ui/assets/Icon awesome-phone-alt.svg'
import calenderIcon from '@/app/ui/assets/Icon ionic-md-calendar.svg'
import clockIcon from '@/app/ui/assets/Icon feather-clock.svg'
import locationIcon from '@/app/ui/assets/map-pin.svg'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-[#04092C] p-10 mt-4">
            <div className=" w-[85%] mx-auto my-0 flex items-center justify-between text-white">
                <h2
                    className="logo text-white font-bold text-4xl"
                    style={{ fontFamily: 'monospace' }}
                >
                    <span className="text-blue-400">S</span>napEvent
                </h2>

                <nav className="list-none flex flex-col gap-2 font-semibold">
                    <Link href={'/'}>Home</Link>
                    <Link href={''}>About Us</Link>
                    <Link href={''}>Blog</Link>
                    <Link href={''}>Trending Events</Link>
                    <Link href={''}>Categories</Link>
                </nav>

                <ul className="contact--info font-light text-sm w-1/3 flex gap-3 flex-col">
                    <li className="flex">
                        <span className="flex mr-auto gap-2">
                            <Image src={msgIcon} alt="" />
                            Email
                        </span>
                        snapevent@support.com
                    </li>
                    <li className="flex">
                        <span className="flex mr-auto gap-2">
                            <Image src={phoneIcon} alt="" />
                            Phone Number
                        </span>
                        +234 0000 000 0000
                    </li>
                    <li className="flex">
                        <span className="flex mr-auto gap-2">
                            <Image src={calenderIcon} alt="" />
                            Working Days
                        </span>
                        Monday - Sunday
                    </li>
                    <li className="flex">
                        <span className="flex mr-auto gap-2">
                            <Image src={clockIcon} alt="" />
                            Working Hours
                        </span>
                        8:00AM - 8:00PM (WAT)
                    </li>
                    <li className="flex">
                        <span className="flex mr-auto gap-2">
                            <Image src={locationIcon} alt="" />
                            Address
                        </span>
                        Somewhere in Ikeja, Lagos, Nigeria.
                    </li>
                </ul>
            </div>
        </footer>
    )
}
