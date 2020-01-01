import React, { Component } from 'react';

import globals from '../../../../utils/globals.scss';
import styles from './moreInfo.module.scss';

import Page from '../../../../components/pageTemplate/pageTemplate';

export default class MoreInfo extends Component {
  render() {
    return (
      <Page.Section navbarMode='primary' display='flex'>
        <Page.SectionTitle>
          Prefer something else?
        </Page.SectionTitle>

        <div className={styles['moreInfo']}>

          <div className={styles['row']}>
            <div className={styles['item']}>
              <div className={styles['icon']}>
                <img alt='Business hours.' src={require('../../../../static/illustrations/hourglass.svg')} />
              </div>

              <div className={styles['content']}>
                <h3 className={styles['title']}>
                  Business Hours
                  <span style={{
                    color: globals.primary 
                  }}>
                    .
                  </span>
                </h3>
                <div className={styles['info']}>
                  <div>
                    <p><b>Monday - Friday</b></p>
                    <p>9h00 - 17h00</p>
                  </div>
                  <div>
                    <p><b>Saturday</b></p>
                    <p>9h00 - 13h00</p>
                  </div>
                  <div>
                    <p><b>Sunday</b></p>
                    <p>CLOSED</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles['row']}>
            <div className={styles['item']}>
              <div className={styles['icon']}>
                <img alt='Business hours.' src={require('../../../../static/illustrations/mail.svg')} />
              </div>

              <div className={styles['content']}>
                <h3 className={styles['title']}>
                  Email addresses
                  <span style={{
                    color: globals.primary 
                  }}>
                    .
                  </span>
                </h3>
                <div className={styles['info']}>
                  <div>
                    <p><b>General</b></p>
                    <p>info@avvent.io</p>
                  </div>
                  <div>
                    <p><b>Tech</b></p>
                    <p>tech@avvent.io</p>
                  </div>
                  <div>
                    <p><b>Sales</b></p>
                    <p>sales@avvent.io</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles['row']}>
            <div className={styles['item']}>
              <div className={styles['icon']}>
                <img alt='Business hours.' src={require('../../../../static/illustrations/phone.svg')} />
              </div>

              <div className={styles['content']}>
                <h3 className={styles['title']}>
                  Contact information
                  <span style={{
                    color: globals.primary 
                  }}>
                    .
                  </span>
                </h3>
                <div className={styles['info']}>
                  <div>
                    <p><b>Stephan Burger</b></p>
                    <p>062 808 9920</p>
                  </div>
                  <div>
                    <p><b>Armin Nel</b></p>
                    <p>076 402 4300</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page.Section>
    );
  }
}
