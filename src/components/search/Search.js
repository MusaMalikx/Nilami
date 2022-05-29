import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../lib/firebase";
import Card from "../card/Card";
import Loading from "../loading/Loading";
import SearchFilter from "./SearchFilter";


const Search = () => {

    const [y, setY] = useState(null);
    const [user, loading] = useAuthState(auth)
    const navigate = useNavigate();

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

    if (loading)
        return <Loading />
    else
        if (!user)
            return navigate('/login')
        else
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