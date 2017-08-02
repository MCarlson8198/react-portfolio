import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: ''});
  }

  render(){
    return(
      <div className="weather-title"> <h2>Search here for a 5 Day forecast in any U.S. city</h2>
        <div className="weather-search-container">
          <form onSubmit={this.onFormSubmit} className="input-group weather-search-form">
            <input
              placeholder="Search"
              className="form-control weather-search"
              value={this.state.term}
              onChange={this.onInputChange}
              />
            <span className="input-group-btn">
              <button id="weatherInput" type="submit" className="btn btn-secondary">Submit</button>
              </span>
          </form>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
