import React from "react";

const SearchResults = ({ results }) => (
  <div>
    <ul>
      {results.map(r => (
        <Result url={r.url} key={r.key} />
      ))}
    </ul>
  </div>
);
export default SearchResults;

const Result = ({ url }) => <img src={url} alt="search-result" />;
