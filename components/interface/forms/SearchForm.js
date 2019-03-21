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
} from 'react-native';
import {
  SearchBar, Text, Header, Divider,
} from 'react-native-elements';
import propTypes from 'prop-types';
import SimpleButton from '../buttons/SimpleButton';

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
    width: width / 2 - 1,
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
    width: 2,
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
                this.resetModal();
                updateSearchQuery(search);
                this.setState({
                  search: '',
                });
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
                style={{ color: 'black' }}
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
      );
    }

    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
          underlayColor="lightgreen"
          onPress={() => this.setModal('searchbar')}
        >
          <Text h4 style={styles.entryText}>
            Search
          </Text>
        </TouchableHighlight>
        <View style={styles.separator} />
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.setModal('filters')}
          underlayColor="lightgreen"
        >
          <Text h4 style={styles.entryText}>
            Filter
          </Text>
        </TouchableHighlight>
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
