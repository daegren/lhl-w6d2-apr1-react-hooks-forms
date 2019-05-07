import React from "react";

class SearchResults extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.results.map(r => (
            <Result url={r.url} key={r.key} />
          ))}
        </ul>
      </div>
    );
  }
}
export default SearchResults;

const Result = ({ url }) => <img src={url} alt="search-result" />;
