import { auth } from '../../../../auth'
import UserProfile from './nav/Profile'

export default async function NavBar() {
    const session = await auth()
    return (
        <header className="bg-[#04092C] p-6">
            <div className="header-text w-[85%] mx-auto my-0 flex flex-col gap-4">
                <div className="header-top flex justify-between">
                    <h2
                        className="logo text-white font-bold text-4xl"
                        style={{ fontFamily: 'monospace' }}
                    >
                        <span className="text-blue-400">S</span>napEvent
                    </h2>
                    <UserProfile user={session?.user} />
                </div>

                <form className="header-bottom bg-white p-5 flex gap-4 rounded-md">
                    <input
                        type="text"
                        name="eventDate"
                        className="w-2/5 shadow-xl py-2 px-9 rounded-3xl"
                        placeholder="Search by Event or Venue"
                    />
                    <input
                        type="date"
                        name="eventDate"
                        id=""
                        className="shadow-xl py-2 px-9 rounded-3xl"
                    />
                    <button className="bg-blue-400 shadow-xl font-semibold text-white py-2 px-9 rounded-3xl">
                        Search
                    </button>
                </form>
            </div>
        </header>
    )
}
