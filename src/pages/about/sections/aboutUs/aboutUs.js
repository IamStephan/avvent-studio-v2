import React, { Component } from 'react';

import globals from '../../../../utils/globals.scss';
import styles from './aboutUs.module.scss';

import Page from '../../../../components/pageTemplate/pageTemplate';

export default class AboutUs extends Component {
  render() {
    return (
      <Page.Section
        navbarMode='light' display='flex'
      >
        <Page.SectionTitle>
          Avvent Studio
          <span style={{
            color: globals.primary
          }}>
            ...
          </span>
        </Page.SectionTitle>

        <div className={styles['aboutUs']}>
          <div className={styles['row']}>
            <div className={styles['img-container']}>
              <img alt='We have a vision.' src={require('../../../../static/illustrations/vision.svg')} />
            </div>
            <div className={styles['content']}>
              <h2 className={styles['heading']}>
                We have a vision
                <span style={{
                  color: globals.primary
                }}>
                  .
                </span>
              </h2>
                We want to push the world beyond imagination. With all the possiblities of technology, how could we not?
            </div>
          </div>

          <div className={`${styles['row']} ${styles['reverse']}`}>
            <div className={styles['img-container']}>
              <img alt='We have a mission.' src={require('../../../../static/illustrations/mission.svg')} />
            </div>
            
            <div className={styles['content']}>
              <h2 className={styles['heading']}>
                We have a mission
                <span style={{
                  color: globals.primary
                }}>
                  .
                </span>
              </h2>
               Besides pushing the world we want to do so with 3 key factors in mind; security, functunality and user experience.
            </div>
          </div>

          <div className={styles['row']}>
            <div className={styles['img-container']}>
              <img alt='We have values.' src={require('../../../../static/illustrations/values.svg')} />
            </div>
              
            <div className={styles['content']}>
              <h2 className={styles['heading']}>
                We have values
                <span style={{
                  color: globals.primary
                }}>
                  .
                </span>
              </h2>
               With enough discipline and creativity we can accomplish anything we set our minds to.
            </div>
          </div>
        </div>
      </Page.Section>
    );
  }
}
