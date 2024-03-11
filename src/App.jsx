import React, { useEffect, useState, useCallback } from "react";

import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Card from "./components/Card/Card";

function App() {
  const [userData, setUserData] = useState({});
  const [emptyError, setEmptyError] = useState(false);
  const [loader, setLoader] = useState(true);

  const formSubmissionHandler = (event, searchInputRef) => {
    event.preventDefault();
    if (searchInputRef.current.value === "") {
      setEmptyError(true);
    } else {
      fetchDataHandler(searchInputRef.current.value);
      searchInputRef.current.value = "";
      setEmptyError(false);
    }
  };

  const fetchDataHandler = useCallback(
    async (searchTerm) => {
      await fetch(`https://api.github.com/users/${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
          setUserData(data);
          setLoader(false);
        });
    },
    [formSubmissionHandler]
  );

  useEffect(() => {
    fetchDataHandler("kartardeveloper");
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <SearchBar
          formSubmissionHandler={formSubmissionHandler}
          emptyError={emptyError}
        />
        <Card user={userData} loading={loader} />
      </div>
    </div>
  );
}

export default App;
