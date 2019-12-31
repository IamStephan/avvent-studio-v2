import React, { Component } from 'react';

import globals from '../../../../utils/globals.scss';
import styles from './howWeDoIt.module.scss';

import Page from '../../../../components/pageTemplate/pageTemplate';

export default class HowWeDoIt extends Component {
  render() {
    return (
      <Page.Section navbarMode='light'>
        <Page.SectionTitle>
          How we do it
          <span style={{
            color: globals.primary
          }}>
            .
          </span>
        </Page.SectionTitle>

        <div className={styles['howWeDoIt']}>
          <div className={styles['row']}>
            <div count={1} className={styles['img-container']}>
              <img alt='We conceptualize.' src={require('../../../../static/illustrations/we_conceptualize.svg')} />
            </div>
            <div className={styles['content']}>
              <h2 className={styles['heading']}>
                We conceptualize
                <span style={{
                  color: globals.primary
                }}>
                  .
                </span>
              </h2>
                You contact us and we start the journey. Just pitch us your vision or idea and we will start to conceptualize all the essentials.
            </div>
          </div>

          <div className={`${styles['row']} ${styles['reverse']}`}>
            <div count={2} className={styles['img-container']}>
              <img alt='We design.' src={require('../../../../static/illustrations/we_design.svg')} />
            </div>
            
            <div className={styles['content']}>
              <h2 className={styles['heading']}>
                We design
                <span style={{
                  color: globals.primary
                }}>
                  .
                </span>
              </h2>
               Just before we start developing we give you design options based on your vision. You can then decide which one best fits your business.
            </div>
          </div>

          <div className={styles['row']}>
            <div count={3} className={styles['img-container']}>
              <img alt='We Conceptualize.' src={require('../../../../static/illustrations/we_develop.svg')} />
            </div>
              
            <div className={styles['content']}>
              <h2 className={styles['heading']}>
                We develop
                <span style={{
                  color: globals.primary
                }}>
                  .
                </span>
              </h2>
               Your product is now in development. We will send you iterations of the product to allow you to track our progress.
            </div>
          </div>

          <div className={`${styles['row']} ${styles['reverse']}`}>
            <div count={4} className={styles['img-container']}>
              <img alt='We Conceptualize.' src={require('../../../../static/illustrations/we_test.svg')} />
            </div>
              
            <div className={styles['content']}>
              <h2 className={styles['heading']}>
                We test
                <span style={{
                  color: globals.primary
                }}>
                  .
                </span>
              </h2>
               Testing is essential to any technological product. We test against security measures and make sure your user experience is at its best.
            </div>
          </div>

          <div className={styles['row']}>
            <div count={5} className={styles['img-container']}>
              <img alt='We Conceptualize.' src={require('../../../../static/illustrations/we_revise.svg')} />
            </div>
              
            <div className={styles['content']}>
              <h2 className={styles['heading']}>
                We revise
                <span style={{
                  color: globals.primary
                }}>
                  .
                </span>
              </h2>
               After all our tests are done we finalize the product by adding or removing features to ensure your product is the best there can be.
            </div>
          </div>

          <div className={`${styles['row']} ${styles['reverse']}`}>
            <div count={6} className={styles['img-container']}>
              <img alt='We Conceptualize.' src={require('../../../../static/illustrations/we_release.svg')} />
            </div>
            
            <div className={styles['content']}>
              <h2 className={styles['heading']}>
                We release
                <span style={{
                  color: globals.primary
                }}>
                  .
                </span>
              </h2>
               Your product is now ready. Your customers can now use your product and simply be amazed at what your business has to offer.
            </div>
          </div>
        </div>
      </Page.Section>
    );
  }
}
