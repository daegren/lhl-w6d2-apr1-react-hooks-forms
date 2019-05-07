import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import "./App.css";

function App() {
  const [results, setResults] = useState([]);

  const searchReddit = async term => {
    const url = `https://www.reddit.com/r/aww/search.json?restrict_sr=true&sort=hot&type=link&limit=100&q=${term}`;

    const resp = await fetch(url);
    const json = await resp.json();

    const images = json.data.children.map(child => ({
      key: child.data.permalink,
      url: child.data.thumbnail
    }));

    return images;
  };

  const handleSearch = async term => {
    setResults([]);

    const images = await searchReddit(term);
    setResults(images);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={results} />
    </div>
  );
}

export default App;
