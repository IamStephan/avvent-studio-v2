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
  'design',
  'native applications',
  'native app',
  'apps',
  'application',
  'e-commerce',
  'online shop',
  'designers',
  'wireframes',
]

export default class App extends Component {
  render() {
    return (
      <Page
        title='Avvent Studio: Native apllications'
        description='Simplify your workflow or simply make your customers life easier.'
        keywords={keywords}
      >
        <Why />
      </Page>
    );
  }
}
