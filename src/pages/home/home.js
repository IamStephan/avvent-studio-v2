import React, { Component } from 'react';

import Page from '../../components/pageTemplate/pageTemplate';

// Sections
import Hero from './sections/hero/hero';
import WhatWeDo from './sections/whatWeDo/whatWeDo';
import HowWeDoIt from './sections/howWeDoIt/howWeDoIt';
import WhatWeHaveDone from './sections/whatWeHaveDone/whatWeHaveDone';
import Contact from './sections/contact/contact';

export default class Home extends Component {
  render() {
    return (
      <Page
        title='Avvent Studio: Home'
        description='We are a next generation software development studio'
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
