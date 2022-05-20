import { useEffect, useState } from "react";
import Card from "../card/Card";
import SearchFilter from "./SearchFilter";


const Search = () => {

    const [y, setY] = useState(null);

    useEffect(() => {
        setY(window.scrollY);

        const handleNavigation = e => {
            const window = e.currentTarget;
            setY(window.scrollY);

        };

        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, []);

    return (
        <div className="container-xxl my-10 flex justify-center lg:justify-start">
            <div className={y > 50 && 'relative'}>
                <SearchFilter />
            </div>
            <div className="shadow-[0px_1px_5px_2px_rgba(0,0,0,0.2)] p-4">
                <Card />
            </div>
        </div>
    )
}

export default Search;