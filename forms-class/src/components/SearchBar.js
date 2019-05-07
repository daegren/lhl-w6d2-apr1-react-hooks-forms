import React from "react";

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      term: ""
    };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          value={this.state.term}
          onChange={this._handleTextChange}
        />
        <button onClick={this._handleSearch}>
          <span role="img" aria-label="search">
            🤯
          </span>
        </button>
      </div>
    );
  }

  _handleTextChange = e => {
    this.setState({ term: e.target.value });
  };

  _handleSearch = () => {
    const { onSearch } = this.props;
    const { term } = this.state;

    if (onSearch) {
      onSearch(term);
    }
    this.setState({ term: "" });
  };
}

export default SearchBar;
