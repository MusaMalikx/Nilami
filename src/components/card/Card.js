import { useEffect, useState } from "react"
import CardItem from "./CardItem";

const Card = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        for (var i = 0; i < 11; i++) {
            setCards(oldArray => [...oldArray, i]);
        }
    }, [])

    return (
        <div className="">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <p className="font-bold text-2xl me-3">Search results </p>
                    <span className="text-sm">( <strong>0</strong> - <strong>10</strong> of <strong>10667</strong> )</span>
                </div>
                <div className="ms-5">
                    <select className="form-select form-select-sm">
                        <option selected value="0">Sort</option>
                        <option value="1">Year: Old to New</option>
                        <option value="2">Year: New to Old</option>
                        <option value="3">Mileage: Low to High</option>
                        <option value="4">Mileage: High to Low</option>
                        <option value="5">Price: Low to High</option>
                        <option value="6">Price: High to Low</option>
                    </select>
                </div>
            </div>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    cards.slice(0, 11).map((c) => (
                        <div key={c} className="mx-auto">
                            <CardItem />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Card