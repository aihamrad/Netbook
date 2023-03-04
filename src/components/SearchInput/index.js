import { SearchIcon } from "../../assets/dynamIcIcons";
const SearchInput = () => {
  return (
    <div className="search-input text-grey mr-5 flex items-center pb-4">
      <SearchIcon />
      <input type="text" className="ml-1" placeholder={"Search Here..."} />
    </div>
  );
};

export default SearchInput;
