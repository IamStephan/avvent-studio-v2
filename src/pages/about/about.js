import React, { Component } from 'react';

import Page from '../../components/pageTemplate/pageTemplate';

// Sections
import AboutUs from './sections/aboutUs/aboutUs';

export default class About extends Component {
  render() {
    return (
      <Page
        title='Avvent Studio: About us'
        description='We are a next generation software development studio. Learn more about our vision, mission and values.'
      >
        <AboutUs />
      </Page>
    );
  }
}
