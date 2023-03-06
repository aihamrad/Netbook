import { createContext, useEffect, useState } from "react";
import { Client } from "../api/contentful";

export const ContentContext = createContext({
  contents: {},
  media: [],
});

export const ContentProvider = ({ children }) => {
  const [contents, setContents] = useState({});

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    Client.getEntry("5cSVru9JZ5bFyBNbLvvjfI")
      .then((entry) => {
        setContents(entry.fields);
      })
      .catch(console.error);
  };

  return (
    <ContentContext.Provider value={{ contents }}>
      {children}
    </ContentContext.Provider>
  );
};
