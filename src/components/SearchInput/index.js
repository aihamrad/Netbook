import { useContext, useState } from "react";
import { SearchIcon } from "../../assets/dynamIcIcons";
import { SearchContext } from "../../store/SearchContext";

const SearchInput = () => {
  const { setQuery, setResults, results, query } = useContext(SearchContext);
  const [searchResultShow, setSearchResultShow] = useState(false);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setQuery(query);
    setSearchResultShow(true);
    const results = searchElements(query);
    if (!e.target.value) {
      setResults([]);
    } else {
      setResults(results);
    }
  };

  const searchElements = (query) => {
    const elements = document.getElementsByTagName("p");
    const spanElements = document.getElementsByTagName("span");
    const results = [];
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const elementText = element.innerText.toLowerCase();
      if (elementText.includes(query)) {
        results.push({ el: element, text: elementText });
      }
    }
    for (let i = 0; i < spanElements.length; i++) {
      const element = spanElements[i];
      const elementText = element.innerText.toLowerCase();
      if (elementText.includes(query)) {
        results.push({ el: element, text: elementText });
      }
    }
    return results;
  };

  const handleLinkClick = (el, index) => {
    el.classList.add("highlight");
    document.getElementById(`result-${index}`).scrollIntoView();
    setTimeout(() => {
      el.classList.remove("highlight");
      setSearchResultShow(false);
      setQuery("");
      setResults([]);
    }, 1000);
  };

  const resultsNotEmpty = results.length > 0;
  const emptyResultsMessage = query
    ? "Not found any try another thing"
    : "Search results will appear here"

  return (
    <div className="search-input text-grey mr-5 flex items-center pb-4 relative">
      <SearchIcon />
      <input
        onFocus={() => setSearchResultShow(true)}
        onChange={handleSearch}
        type="text"
        value={query}
        className="ml-1"
        placeholder={"Search Here..."}
      />
      {searchResultShow && (
        <div
          onMouseLeave={() => setSearchResultShow(false)}
          className="search-box absolute top-100 w-[100%] background-white p-2 rounded-lg"
        >
          {resultsNotEmpty ? (
            results.map((el, index) => (
              <div key={index} className="b-bottom-secondry p-2 text-xs">
                <div onClick={() => handleLinkClick(el.el, index)}>
                  {el.text}
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-dark-blue">{emptyResultsMessage}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
