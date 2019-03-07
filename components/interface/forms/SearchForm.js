/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import {
  View, StyleSheet, Picker, Modal, Text, Dimensions,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import propTypes from 'prop-types';
import DatePicker from 'react-native-datepicker';
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
    justifyContent: 'center',
    padding: 20,
    margin: 20,
    top: '25%',
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
    margin: 20,
    width: '100%',
  },
});

export default class SearchForm extends Component {
  state = {
    category: null,
    showModal: false,
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  setModal = command => this.setState({ showModal: command });

  resetModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const {
      genreList,
      updateSearchQuery,
      genreSearch,
      dateSearch,
      genreAndDateSearch,
    } = this.props;
    const { category, showModal, search } = this.state;
    let modalRender = null;

    if (showModal === 'searchbar') {
      modalRender = (
        <View style={styles.modal}>
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
        <View style={styles.modal}>
          <Picker
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
          <DatePicker />
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
                genreSearch(category);
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
          visible={showModal !== false}
          animationType="fade"
          onRequestClose={() => this.resetModal}
        >
          <View>{modalRender}</View>
        </Modal>
      </View>
    );
  }
}

SearchForm.propTypes = {
  genreList: propTypes.arrayOf(propTypes.shape()).isRequired,
};
