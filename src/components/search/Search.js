import SearchBar from "./SearchBar";
import SearchCard from "./SearchCard";
import SearchFilter from "./SearchFilter";

const Search = () => {
    return (
        <div className="container-xxl my-10 flex">
            <div>
                <SearchFilter />
            </div>
            <div>
                <SearchCard />
            </div>
        </div>
    )
}

export default Search;