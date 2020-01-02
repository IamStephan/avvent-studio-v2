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
  'native applications',
  'native app',
  'apps',
  'application',
  'e-commerce',
  'online shop',
  'designers',
  'wireframes',
  'site',
  'shop',
  'mobile',
  'mobile app',
  'mobile application',
  'desktop',
  'desktop app',
  'desktop application'
]

export default class Web extends Component {
  render() {
    return (
      <Page
        title='Avvent Studio: Website | Web app'
        description='We develop both websites and web apps. It just depends on what you need.'
        keywords={keywords}
      >
        <Why />
        
      </Page>
    );
  }
}
