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
        <Page.Section
          className={styles['hero']}
          navbarMode='light'
          branding={1}
        >
          <div className={styles['left']}>
            <div className={styles['callout']}>
              <h1 className={styles['heading']}>
                We develop
                <span style={{
                  color: globals.primary
                }}>
                  .
                </span>
              </h1>

              <p className={styles['content']}>
                We are a software development studio that can provide you with world-class applications. With a team motived to only be the best you can be assured you'll only get the best.
              </p>

              <div className={styles['actions']}>
                <Button>Contact Us</Button>
              </div>
            </div>         
            

            
          </div>
          <div className={styles['right']}>
            <img src={require('../../static/illustrations/hero.svg')} />
          </div>
        </Page.Section>

        <Page.Section navbarMode='primary'>
          
        </Page.Section>

        <Page.Section navbarMode='light'>
          
        </Page.Section>

        <Page.Section navbarMode='primary'>
          
        </Page.Section>
        
        <Page.Section navbarMode='light'>
          
        </Page.Section>
      </Page>
    );
  }
}
