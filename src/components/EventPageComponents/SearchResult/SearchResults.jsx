import React from "react";

const SearchResults = ({ results }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {results.map((event) => (
          <li key={event.id}>
            {event.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
