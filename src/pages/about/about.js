import React, { Component } from 'react';

import Page from '../../components/pageTemplate/pageTemplate';

// Sections
import AboutUs from './sections/aboutUs/aboutUs';

const keywords = [
  'about Avvent',
  'about Avvent studio',
  'about us',
  'about us','develop',
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

export default class About extends Component {
  render() {
    return (
      <Page
        title='Avvent Studio: About us'
        description='We are a next generation software development studio. Learn more about our vision, mission and values.'
        keywords={keywords}
      >
        <AboutUs />
      </Page>
    );
  }
}
