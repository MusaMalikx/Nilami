import Card from "../card/Card";
import SearchFilter from "./SearchFilter";

const Search = () => {
    return (
        <div className="container-xxl my-10 flex">
            <div>
                <SearchFilter />
            </div>
            <div>
                <Card />
            </div>
        </div>
    )
}

export default Search;