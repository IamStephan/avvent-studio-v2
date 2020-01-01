import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import globals from '../../../../utils/globals.scss';
import styles from './why.module.scss';

import Page from '../../../../components/pageTemplate/pageTemplate';
import Button from '../../../../components/button/button';

@withRouter
export default class Why extends Component {
  constructor(props) {
    super(props)

    this.openPage = this.openPage.bind(this)
  }

  openPage(url) {
    this.props.history.push(url)
  }

  render() {
    return (
      <Page.Section navbarMode='light' display='flex' >
        <Page.SectionTitle>
          We develop native apps
          <span style={{
            color: globals.primary
          }}>
            .
          </span>
        </Page.SectionTitle>

        <div className={styles['why']}>
          <div className={styles['left']}>
            <img alt='E-commerce' src={require('../../../../static/illustrations/app_1.svg')} />
          </div>

          <div className={styles['right']}>
            <div className={styles['container']}>
              <h2 className={styles['title']}>
                Why do you need a native app?
              </h2>
              <br />
              <div className={styles['content']}>
                Do you have an unique way of getting things done? Native applications can help you improve the productivity of your business by having them locally on your desktop and smartphone.
              </div>
              <br />
              <div className={styles['content']}>
                Want your customers to interact with you business locally on their phone? Native apps provide you with the best solution. Customers can experience your business functionality directly on their phone with superb performance.
              </div>
              <br />
              <div className={styles['content']}>
                Do you have an idea but can't implement it yourself? We can help you bring your idea to life. Native apps are perfect for user engagement. Don't just outshine your compitition but show your customers what is possible.
              </div>
              <br />
              <div className={styles['content']}>
                Show your customers how a business can be of world-class standards
              </div>
              <br />
              <div>
                <Button color='light' style={{color: globals.dark}} onClick={() => this.openPage('/contact')}>
                  Contact us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Page.Section>
    );
  }
}
