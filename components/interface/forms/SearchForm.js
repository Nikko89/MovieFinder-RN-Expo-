/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Picker,
  Modal,
  TextInput,
  TouchableHighlight,
  Dimensions,
  Alert,
} from 'react-native';
import {
  SearchBar, Text, Header, Divider,
} from 'react-native-elements';
import propTypes from 'prop-types';
import DoubleHighlight from '../buttons/DoubleHighlight';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'stretch',
    borderBottomColor: '#bbb',
    borderBottomWidth: 3,
    flexDirection: 'row',
  },
  button: {
    paddingHorizontal: 5,
    height: 50,
    width: width / 2 - 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  modal: {
    paddingVertical: 30,
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.92)',
  },
  closeButton: {
    alignSelf: 'flex-end',
    backgroundColor: 'red',
    paddingHorizontal: 20,
  },
  submitButton: {
    alignSelf: 'flex-end',
    backgroundColor: 'green',

    paddingHorizontal: 20,
  },
  buttonList: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
    width: '100%',
  },
  entryText: {
    textTransform: 'uppercase',
    color: 'white',
  },
  separator: {
    width: 3,
    backgroundColor: 'white',
  },
});

export default class SearchForm extends Component {
  state = {
    category: null,
    showModal: false,
    search: '',
    year: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  setModal = command => this.setState({ showModal: command });

  resetModal = () => {
    this.setState({ showModal: false, year: '', category: null });
  };

  updateYear = (year) => {
    this.setState({ year });
  };

  render() {
    const {
      genreList,
      updateSearchQuery,
      genreSearch,
      dateSearch,
      genreAndDateSearch,
      resetSearchQuery,
    } = this.props;
    const {
      category, showModal, search, year,
    } = this.state;
    let modalRender = null;

    if (showModal === 'searchbar') {
      modalRender = (
        <View style={{ alignItems: 'center' }}>
          <Header
            containerStyle={{
              backgroundColor: 'black',
              justifyContent: 'space-around',
              margin: 0,
            }}
            placement="left"
            leftComponent={{
              icon: 'cancel',
              color: 'white',
              onPress: () => {
                this.resetModal();
              },
              size: 27.5,
            }}
            rightContainerStyle={{ backgroundColor: 'green' }}
            rightComponent={{
              icon: 'done',
              color: 'white',
              onPress: () => {
                if (search.length) {
                  this.resetModal();
                  updateSearchQuery(search);
                  this.setState({
                    search: '',
                  });
                } else {
                  Alert.alert('Nothing to search', 'Enter some text before submitting!', [
                    {
                      text: 'I see',
                    },
                  ]);
                }
              },
              size: 27.5,
            }}
            centerComponent={{
              text: (
                <Text h4 style={{ color: 'white' }}>
                  KEYWORD SEARCH
                </Text>
              ),
            }}
            barStyle="dark-content"
          />
          <View style={{ justifyContent: 'center', marginTop: 20 }}>
            <SearchBar
              placeholder="Enter keyword..."
              onChangeText={this.updateSearch}
              value={search}
              containerStyle={{ width: 300 }}
            />
          </View>
        </View>
      );
    } else if (showModal === 'filters') {
      modalRender = (
        <View>
          <Header
            containerStyle={{
              backgroundColor: 'black',
              justifyContent: 'space-around',
              margin: 0,
            }}
            placement="left"
            leftComponent={{
              icon: 'cancel',
              color: 'white',
              onPress: () => {
                this.resetModal();
              },
              size: 27.5,
            }}
            rightContainerStyle={{ backgroundColor: 'green' }}
            rightComponent={{
              icon: 'done',
              color: 'white',
              onPress: () => {
                this.resetModal();
                if (category && year.length) {
                  genreAndDateSearch(year, category);
                } else if (category) {
                  genreSearch(category);
                } else if (year) {
                  dateSearch(year);
                }
              },
              size: 27.5,
            }}
            centerComponent={{
              text: (
                <Text h4 style={{ color: 'white' }}>
                  FILTERS
                </Text>
              ),
            }}
            barStyle="dark-content"
          />
          <View
            style={{
              justifyContent: 'center',
            }}
          >
            <TouchableHighlight
              style={{
                width: 200,
                backgroundColor: 'blue',
                margin: 20,
                padding: 15,
                alignSelf: 'center',
              }}
              onPress={resetSearchQuery}
              underlayColor="black"
            >
              <Text style={{ textAlign: 'center', color: 'white' }}>CLEAR FILTERS</Text>
            </TouchableHighlight>
            <Text h4 style={{ textAlign: 'center', marginTop: 20 }}>
              Select genre:
            </Text>
            <Picker
              itemStyle={{ textAlign: 'center', fontWeight: 'bold', color: 'purple' }}
              selectedValue={category}
              onValueChange={cat => this.setState({
                category: cat,
              })
              }
            >
              {genreList.map(genre => (
                <Picker.Item
                  label={genre.name}
                  value={genre.id}
                  key={genre.id}
                  itemStyle={{ color: 'purple', fontWeight: ' bold' }}
                />
              ))}
            </Picker>
            <Text h4 style={{ textAlign: 'center' }}>
              Select Year:
            </Text>
            <TextInput
              placeholder="Insert Year"
              style={{ textAlign: 'center', marginVertical: 20, fontSize: 22 }}
              value={year}
              onChangeText={this.updateYear}
              keyboardType="numeric"
              maxLength={4}
            />
          </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <DoubleHighlight
          funcOne={() => this.setModal('searchbar')}
          funcTwo={() => this.setModal('filters')}
          colorSet="lightgreen"
          textOne="Search"
          textTwo="Filters"
        />
        <Modal
          transparent
          visible={showModal !== false}
          animationType="fade"
          onRequestClose={() => this.resetModal}
        >
          <View style={styles.modal}>{modalRender}</View>
        </Modal>
      </View>
    );
  }
}

SearchForm.propTypes = {
  genreList: propTypes.arrayOf(propTypes.shape()).isRequired,
};
