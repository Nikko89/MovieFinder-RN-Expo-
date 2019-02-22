/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View } from 'react-native';
import SearchForm from '../interface/forms/SearchForm';
import SearchView from '../interface/list_views/SearchView';

class SearchScreen extends React.Component {
  state = {
    searchResults: [],
    url:
      'https://api.themoviedb.org/3/discover/movie?api_key=a6c09bf32610b5108b882b558b2e0d85&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
  };

  componentDidMount() {
    this.fetchData();
    this.forceUpdate();
  }

  fetchData = () => {
    const { url } = this.state;
    fetch(url)
      .then(this.handleErrors)
      .then(res => res.json())
      .then(res => this.setState({
        searchResults: res.results,
      }));
  };

  handleErrors = (response) => {
    if (!response.ok) {
      console.log('RESPONSE PROBLEM', response);
    }
    return response;
  };

  handleSubmit() {
    this.setState({
      url:
        'https://api.themoviedb.org/3/discover/movie?api_key=a6c09bf32610b5108b882b558b2e0d85&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2',
    });
  }

  render() {
    const { searchResults } = this.state;
    return (
      <View>
        <SearchForm handleSubmit={this.handleSubmit} />
        <SearchView list={searchResults || []} />
      </View>
    );
  }
}

export default SearchScreen;
