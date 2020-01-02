import React, { Component } from 'react';

import Page from '../../components/pageTemplate/pageTemplate';

// Sections
import Why from './sections/why/why';

export default class Ecommerce extends Component {
  render() {
    return (
      <Page
        title='Avvent Studio: E-commerce'
        description='Let customers by products or services directly from your website.'
      >
        <Why />
      </Page>
    );
  }
}
