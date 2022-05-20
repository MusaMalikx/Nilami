import { useEffect, useState } from "react";
import CardItem from "../card/CardItem";

const Home = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        for (var i = 0; i < 15; i++) {
            setCards(oldArray => [...oldArray, i]);
        }
    }, [])

    return (
        <div className="container-xxl my-10">
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    cards.slice(0, 15).map((c) => (
                        <div key={c} className="mx-auto">
                            <CardItem />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home;