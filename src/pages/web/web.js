import React, { Component } from 'react';

import Page from '../../components/pageTemplate/pageTemplate';

// Sections
import Why from './sections/why/why';

export default class Home extends Component {
  render() {
    return (
      <Page
        title='Avvent Studio: Website | Web app'
        description='We develop both websites and web apps. It just depends on what you need.'
      >
        <Why />
        
      </Page>
    );
  }
}
