import React, { Component } from 'react';

import Page from '../../components/pageTemplate/pageTemplate';

// Sections
import Why from './sections/why/why';

export default class Home extends Component {
  render() {
    return (
      <Page
        title='Avvent Studio: Website | Web app'
        description='Let customers by products or services directly from your website.'
      >
        <Why />
      </Page>
    );
  }
}
