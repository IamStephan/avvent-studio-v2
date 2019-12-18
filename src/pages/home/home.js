import React, { Component } from 'react';

import globals from '../../utils/globals.scss';
import styles from './home.module.scss';

import Page from '../../components/pageTemplate/pageTemplate';
import Button from '../../components/button/button';

export default class Home extends Component {
  render() {
    return (
      <Page
        title='Avvent Studio: Home'
        description='We are a next generation software development studio'
      >
        <Page.Section className={styles['hero']}>
          <div className={styles['left']}>
            <h1 className={styles['heading']}>
              We Develop
              <span style={{
                color: globals.primary
              }}>
                .
              </span>
            </h1>
            <p className={styles['content']}>
              We are a software development studio that can provide you with world-class applications. 
            </p>
            <Button>Contact Us</Button>
          </div>
          <div className={styles['right']}>
            <img src={require('../../static/illustrations/hero.svg')} />
          </div>
        </Page.Section>

        <Page.Section>
          
        </Page.Section>

        <Page.Section>
          
        </Page.Section>

        <Page.Section>
          
        </Page.Section>
        
        <Page.Section>
          
        </Page.Section>
      </Page>
    );
  }
}
