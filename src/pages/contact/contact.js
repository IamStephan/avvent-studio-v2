import React, { Component } from 'react';

import Page from '../../components/pageTemplate/pageTemplate';

import Contact from './sections/contact/contact';
import MoreInfo from './sections/moreInfo/moreInfo';

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

export default class ContactUs extends Component {
  render() {
    return (
      <Page
        title='Avvent Studio: Contact Us'
        description='Simply fill in the form and we will contact you as soon as possible. If you prefer another method you can use the details below to contact us.'
        keywords={keywords}
      >  
        <Contact />

        <MoreInfo />
      </Page>
    );
  }
}
