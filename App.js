/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  TextInput,
  Button
} from 'react-native';
import CircleComponent from './scr/circleComponent'
type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
    <CircleComponent/>

    );
  }
}

