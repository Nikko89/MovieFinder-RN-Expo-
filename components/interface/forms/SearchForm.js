/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import {
  View, StyleSheet, Picker, Modal, TextInput,
} from 'react-native';
import { SearchBar, Text } from 'react-native-elements';
import propTypes from 'prop-types';
import SimpleButton from '../buttons/SimpleButton';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#bbb',
    borderBottomWidth: 3,
    flexDirection: 'row',
    paddingVertical: 10,
  },
  button: {
    width: 150,
    marginHorizontal: 5,
    backgroundColor: 'blue',
  },
  modal: {
    paddingVertical: 30,
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.95)',
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
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text h4 style={{ marginBottom: 20 }}>
            Search movies by keywords
          </Text>
          <SearchBar
            placeholder="Enter keyword..."
            onChangeText={this.updateSearch}
            value={search}
            containerStyle={{ width: 300 }}
          />
          <View style={styles.buttonList}>
            <SimpleButton
              style={styles.closeButton}
              click={this.resetModal}
              color="white"
              title="Cancel"
              iconName="close"
            />
            <SimpleButton
              style={styles.submitButton}
              click={() => {
                this.resetModal();
                updateSearchQuery(search);
                this.setState({
                  search: '',
                });
              }}
              color="white"
              title="Submit"
              iconName="checkmark-circle"
            />
          </View>
        </View>
      );
    } else if (showModal === 'filters') {
      modalRender = (
        <View>
          <Text h4 style={{ textAlign: 'center' }}>
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
          <View style={styles.buttonList}>
            <SimpleButton
              style={styles.closeButton}
              click={this.resetModal}
              color="white"
              title="Cancel"
              iconName="close"
            />
            <SimpleButton
              style={styles.submitButton}
              click={() => {
                this.resetModal();
                if (category && year.length) {
                  genreAndDateSearch(year, category);
                } else if (category) {
                  genreSearch(category);
                } else if (year) {
                  dateSearch(year);
                }
              }}
              color="white"
              title="Submit"
              iconName="checkmark-circle"
            />
          </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <SimpleButton
          iconName="search"
          color="white"
          style={styles.button}
          title="search"
          click={() => this.setModal('searchbar')}
        />
        <SimpleButton
          iconName="options"
          color="white"
          style={styles.button}
          title="filters"
          click={() => this.setModal('filters')}
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
