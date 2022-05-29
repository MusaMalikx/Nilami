import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../lib/firebase";
import Loading from "../loading/Loading";
import AuctionTable from "../table/Table";

const Auction = () => {

    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth)

    if (loading)
        return <Loading />
    else
        if (!user)
            return navigate('/login')
        else
            return (
                <div className="container-xxl my-10">
                    <AuctionTable />
                </div>
            )
}

export default Auction;