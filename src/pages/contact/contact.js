import React, { Component } from 'react';

import Page from '../../components/pageTemplate/pageTemplate';

import Contact from './sections/contact/contact';
import MoreInfo from './sections/moreInfo/moreInfo';

export default class Home extends Component {
  render() {
    return (
      <Page
        title='Avvent Studio: Contact Us'
        description='Simply fill in the form and we will contact you as soon as possible. If you prefer another method you can use the details below to contact us.'
      >  
        <Contact />

        <MoreInfo />
      </Page>
    );
  }
}
