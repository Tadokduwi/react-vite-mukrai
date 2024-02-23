import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

interface User {
    id: number,
    name: string,
    img: string,
    description: string
}


const Home = () => {

    const [users, setUsers] = useState<User[]>([])

    const getData = async () => {
        await axios.get(`${import.meta.env.VITE_API}/starav`)
            // await axios.get(`${import.meta.enVITE_API_ME}/users`)
            .then((res) => {
                if (res.status === 200) {
                    setUsers(res.data)
                    console.log(res.data);

                }
            }).catch((err) => {
                console.log(err.massage);

            })
    }

    useEffect(() => {
        getData()
    }, [])
    {


        return (
            <>
                <div className="grid grid-cols-3 gap-4 pl-10 pr-10">
                    {users.map((user) => (
                        <div className="flex flex-row w-100" key={user.id}>
                            <div className="card lg:card-side bg-base-300 shadow-xl">
                                <figure><img src={user.img} alt="Album" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{user.name}</h2>
                                    <p>{user.description}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/detail/${user.id}`} >
                                            <button className="btn btn-primary" >Detail</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </>
        )
    }
}

export default Home
