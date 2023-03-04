import { createContext, useEffect, useState } from "react";

export const SearchContext = createContext({
  query: "",
  setQuery: () => {},
  results: [],
  setResults: () => {},
});

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    results.forEach((result, index) => {
      result.el.id = `result-${index}`;
    });
    return () => {
      results.forEach((result, index) => {
        result.el.id = "";
      });
    };
  }, [results]);

  return (
    <SearchContext.Provider value={{ query, setQuery, results, setResults }}>
      {children}
    </SearchContext.Provider>
  );
};
