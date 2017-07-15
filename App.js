import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import reducers from './reducers';
import Src from './src';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Src/>
      </Provider>
    );
  }
}

