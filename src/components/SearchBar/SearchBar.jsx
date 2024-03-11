import React, { useRef } from "react";
import "./searchbar.css";

function SearchBar({ formSubmissionHandler, emptyError }) {
  const searchInputRef = useRef();

  return (
    <div className="searchbar">
      <form
        action="#"
        className="searchbar-form"
        onSubmit={(event) => formSubmissionHandler(event, searchInputRef)}
      >
        <label htmlFor="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
          >
            <path
              d="M17.5 17.5L22 22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </label>
        <input
          type="text"
          name="search"
          id="search"
          className="search-input"
          autoFocus={true}
          placeholder="Search GitHub username..."
          ref={searchInputRef}
        />
        {emptyError && (
          <p className="error-message input-empty__error">Empty Field</p>
        )}
        <button type="submit" className="button search-submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
