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
          We develop websites and web apps
          <span style={{
            color: globals.primary
          }}>
            .
          </span>
        </Page.SectionTitle>

        <div className={styles['why']}>
          <div className={styles['left']}>
            <img alt='Websites | Web apps' src={require('../../../../static/illustrations/web_1.svg')} />
          </div>

          <div className={styles['right']}>
            <div className={styles['container']}>
              <h2 className={styles['title']}>
                Why do you need a website or web app?
              </h2>
              <br />
              <div className={styles['content']}>
                Having an online presence in todays world is an absolute must to survive. But who wants to survive when you have an opportunity to thrive. Don't just be online, show the world what your business is about and do so with your vision. This can be achieved in two manners.
              </div>
              <br />
              <div className={styles['content']}>
                You can make your business more accessible by having a website. Let people find you, be amazed at what your business has to offer and do so by having a world-class website. Rank first on Google searches, that way people know you mean business.
              </div>
              <br />
              <div className={styles['content']}>
                Does your business offer more? Online bookings? Item tracking? You need a web app. Your customers can do it all on your website. No need for third party services, it can all be directly on your web app. Fewer clicks make for a happier customer
              </div>
              <br />
              <div className={styles['content']}>
                Don't hesitate. Contact us
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
