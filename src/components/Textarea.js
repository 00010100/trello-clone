import React, { Component } from 'react';

export default class MyTextarea extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return <textarea {...this.props} />;
  }
}
