import { useState } from "react"


const Navbar = () => {

    const [search, setSearch] = useState('')
    console.log(search);
    

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl" href="/">MAKRAI AV</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" 
                        placeholder="Search" 
                        className="input input-bordered w-24 md:w-auto"
                        onChange={(e) => setSearch(e.target.value)} 
                        />

                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://media.discordapp.net/attachments/557835128559108096/1136178144026558554/18.png?ex=65e807da&is=65d592da&hm=1d12baf3f80f1751beff6dee6c224a9ad1145524682dfff0f9e0a89446d016fe&=&format=webp&quality=lossless&width=426&height=640" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar