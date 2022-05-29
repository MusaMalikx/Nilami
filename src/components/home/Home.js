import { useEffect, useState } from "react";
import CardItem from "../card/CardItem";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../lib/firebase";
import Loading from "../loading/Loading";
import List from "../card/List"

const Home = () => {

    const [user, loading] = useAuthState(auth)
    const [cards, setCards] = useState([]);
    // const [doc, setDoc] = useState(db, "auctions")
    const navigate = useNavigate();

    // useEffect(() => {
    //     const setUser = async() => {
    //         await setDoc(userRef, {
    //             ...data,
    //             timeStamp: serverTimestamp()
    //           }).then((res) => {
    //             alert("Changes are Saved!")
    //           }).catch((err) => {
    //             alert(err.message)
    //           });
    //     }    
    //     setUser();
    // }, [])

    if (loading)
        return <Loading />
    else
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
                                // cards.slice(0, 15).map((c) => (
                                //     <div key={c} className="mx-auto">
                                //         <Link to={`/card/${c}`}>
                                //             <CardItem />
                                //         </Link>
                                //     </div>
                                // ))
                                List.map((c, i) => (
                                    <div key={i} className="mx-auto">
                                        <Link to={`/card/${c.id}`} state={{ card: c }}>
                                            <CardItem card={c} />
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