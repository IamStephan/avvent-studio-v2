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
          We develop e-commerce sites
          <span style={{
            color: globals.primary
          }}>
            .
          </span>
        </Page.SectionTitle>

        <div className={styles['why']}>
          <div className={styles['left']}>
            <img alt='E-commerce' src={require('../../../../static/illustrations/ecommerce_1.svg')} />
          </div>

          <div className={styles['right']}>
            <div className={styles['container']}>
              <h2 className={styles['title']}>
                Why do you need an e-commerce sites?
              </h2>
              <br />
              <div className={styles['content']}>
                Your customers can buy directly from you. They don't need to go to a third party service. That way your customers can feel right at home when purchasing from your shop. Expand your borders and reach more customers.
              </div>
              <br />
              <div className={styles['content']}>
                Already have a website? No need for concern, we will integrate your online shop directly into an existing website (provided the website is done properly).
              </div>
              <br />
              <div className={styles['content']}>
                Need both a website and an online shop. We've got you covered. We can provide you with a website and an online shop with a unique experience that your customers will love.
              </div>
              <br />
              <div className={styles['content']}>
                Feel free to contact us
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
