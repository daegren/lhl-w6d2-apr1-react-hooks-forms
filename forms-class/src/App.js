import React from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      results: []
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBar onSearch={this._handleSearch} />
        <SearchResults results={this.state.results} />
      </div>
    );
  }

  _handleSearch = term => {
    this.setState({ results: [] });
    this._searchReddit(term);
  };

  _searchReddit = term => {
    const url = `https://www.reddit.com/r/aww/search.json?restrict_sr=true&sort=hot&type=link&q=${term}`;

    fetch(url)
      .then(resp => resp.json())
      .then(json => {
        const results = json.data.children.map(child => ({
          key: child.data.permalink,
          url: child.data.thumbnail
        }));

        this.setState({ results });
      });
  };
}

export default App;
