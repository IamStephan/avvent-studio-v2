import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import globals from '../../../../utils/globals.scss';
import styles from './hero.module.scss';

import Page from '../../../../components/pageTemplate/pageTemplate';
import ContactIcon from '@material-ui/icons/Call';
import Button from '../../../../components/button/button';

@withRouter
export default class Hero extends Component {
  constructor(props) {
    super(props)

    this.openPage = this.openPage.bind(this)
  }

  openPage(url) {
    this.props.history.push(url)
  }

  render() {
    return (
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
              We are a software development studio that provides you with world-class applications. With a team motivated to only be the best you can be assured you'll only get the best.
            </p>
            
            <div className={styles['actions']}>
              <Button onClick={() => this.openPage('/contact')}>
                Contact Us
                <ContactIcon style={{
                  marginLeft: `${globals.margin}px`
                }} />
              </Button>
            </div>
          </div>         
   
        </div>
        <div className={styles['right']}>
          <img alt='Hero illustration' src={require('../../../../static/illustrations/hero.svg')} />
        </div>
      </Page.Section>
    );
  }
}
