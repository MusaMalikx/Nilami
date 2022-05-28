import { useEffect, useState } from "react";
import CardItem from "../card/CardItem";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../lib/firebase";

const Home = () => {

    const [user] = useAuthState(auth)
    const [cards, setCards] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        for (let i = 0; i < 15; i++) {
            setCards(oldArray => [...oldArray, i]);
        }
    }, [])

    if (!user)
        return navigate('/login')
    else
        return (
            <>
                <div className="flex items-end justify-center my-5">
                    <img src={logo} className='w-36' alt="logo" />
                    <p className="text-5xl font-bold tracking-widest relative bottom-8 -left-5">ilami</p>
                </div>
                <div className="container-xxl my-10">
                    <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {
                            cards.slice(0, 15).map((c) => (
                                <div key={c} className="mx-auto">
                                    <Link to={`/card/${c}`}>
                                        <CardItem />
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </>
        )
}

export default Home;