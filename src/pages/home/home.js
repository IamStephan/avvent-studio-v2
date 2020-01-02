import React, { Component } from 'react';

import Page from '../../components/pageTemplate/pageTemplate';

// Sections
import Hero from './sections/hero/hero';
import WhatWeDo from './sections/whatWeDo/whatWeDo';
import HowWeDoIt from './sections/howWeDoIt/howWeDoIt';
import WhatWeHaveDone from './sections/whatWeHaveDone/whatWeHaveDone';
import Contact from './sections/contact/contact';

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

export default class Home extends Component {
  render() {
    return (
      <Page
        title='Avvent Studio: Home'
        description='We are a next generation software development studio'
        keywords={keywords}
      >
        <Hero />

        <WhatWeDo />

        <HowWeDoIt />

        <WhatWeHaveDone />
        
        <Contact />
      </Page>
    );
  }
}
