import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  render() {
    return (
      <div className="search-bar transparent-background">
        <input
          className="form-control text-center"
          placeholder="Search for anything on Youtube"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
}

onInputChange(term){
  this.setState({term});
  this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
