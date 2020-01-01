import React, { Component } from 'react';

import Page from '../../components/pageTemplate/pageTemplate';

// Sections
import Why from './sections/why/why';

export default class Home extends Component {
  render() {
    return (
      <Page
        title='Avvent Studio: Native apllications'
        description='Simplify your workflow or simply make your customers life easier.'
      >
        <Why />
      </Page>
    );
  }
}
