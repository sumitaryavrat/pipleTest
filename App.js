
import React, { Component } from 'react';
import CircleComponent from './scr/circleComponent'   // importing Component from another dir.
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
    <CircleComponent/>

    );
  }
}

