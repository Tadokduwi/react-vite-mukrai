import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"


interface detail {
    id: string,
    name: string,
    img: string,
    description: string,
    code1: string,
    code2: string,
    code3: string,
    code4: string
    link1: string,
    watch: string
}

const Detail = () => {

    const [av, setAv] = useState<detail>({
        id: '',
        name: '',
        img: '',
        description: '',
        code1: '',
        code2: '',
        code3: '',
        code4: '',
        link1: '',
        watch: ''
    })
    const { id } = useParams()

    const getData = async () => {
        await axios.get(`${import.meta.env.VITE_API}/starav/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    setAv(res.data)
                }
            }).catch((err) => {
                console.log(err.massage);

            })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            {!! av && (
                <div>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img src={av.img} alt="Movie" className="w-60" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{av.name}</h2>
                            <p>{av.description}</p>
                            <a href={av.link1}>{av.code1}</a>
                            <p>{av.code2}</p>
                            <p>{av.code3}</p>
                            <p>{av.code4}</p>
                            <div className="card-actions justify-end">
                                <Link to={av.watch}>
                                    <button className="btn btn-primary">Watch</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Detail