import React, { Component } from 'react';

import globals from '../../utils/globals.scss';
import styles from './notFound.module.scss';

import Page from '../../components/pageTemplate/pageTemplate';

export default class NotFound extends Component {
  render() {
    return (
      <Page
        title='Avvent Studio: Not Found'
        description='This page could not be found or does not exist'
      >
        <Page.Section display='flex' >
          <Page.SectionTitle>
            Page Not Found
            <span style={{
              color: globals.primary
            }}>
              .
            </span>
          </Page.SectionTitle>

          <div className={styles['notFound']}>
            <h1 className={styles['huge']}>
              4
              <span style={{
                color: globals.primary
              }}>
                0
              </span>
              4
            </h1>
            <h1>
              Oops
              <span style={{
                color: globals.primary
              }}>
                ...
              </span>
            </h1>
            <p>
              This page could not be found or does not exist.
            </p>

            <img alt='Not Found' src={require('../../static/illustrations/not_found_guy.svg')} />
          </div>
        </Page.Section>
      </Page>
    );
  }
}
