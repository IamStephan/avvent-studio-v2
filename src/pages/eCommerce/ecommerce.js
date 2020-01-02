import React, { Component } from 'react';

import Page from '../../components/pageTemplate/pageTemplate';

// Sections
import Why from './sections/why/why';

const keywords = [
  'develop',
  'development',
  'development studio',
  'development agency',
  'developers',
  'developer',
  'website',
  'website',
  'website design',
  'website developer',
  'design',
  'apps',
  'application',
  'e-commerce',
  'online shop',
  'designers',
  'wireframes',
  'site',
  'shop',
  'mobile'
]

export default class Ecommerce extends Component {
  render() {
    return (
      <Page
        title='Avvent Studio: E-commerce'
        description='Let customers by products or services directly from your website.'
        keywords={keywords}
      >
        <Why />
      </Page>
    );
  }
}
