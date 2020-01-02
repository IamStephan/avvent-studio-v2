import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import globals from '../../../../utils/globals.scss';
import styles from './whatWeDo.module.scss';

import InfoIcon from '@material-ui/icons/InfoOutlined';
import Page from '../../../../components/pageTemplate/pageTemplate';
import Button from '../../../../components/button/button';
import Card from '../../../../components/card/card';

@withRouter
export default class WhatWeDo extends Component {
  constructor(props) {
    super(props)

    this.openPage = this.openPage.bind(this)
  }

  openPage(url) {
    this.props.history.push(url)
  }

  render() {
    return (
      <Page.Section navbarMode='primary'>
        <Page.SectionTitle>What we do.</Page.SectionTitle>

        <div className={styles['whatWeDo']}>
          <div className={styles['cards']}>
            <Card className={styles['card']}>
              <Card.Media alt='E-commerce' src={require('../../../../static/illustrations/ecommerce_1.svg')} mode='contain' height={200} />

              <Card.Title>
                We develop E-commerce sites.
              </Card.Title>

              <Card.Content>
                Push your business across the borders and grow by allowing customers to buy your products directly from your website. That way you can maintain the look and you feel of your business.
              </Card.Content>

              <Card.Actions>
                <Button onClick={() => this.openPage('/ecommerce')}>
                  Learn More
                  <InfoIcon style={{
                    marginLeft: `${globals.margin}px`
                  }} />
                </Button>
              </Card.Actions>
            </Card>

            <Card className={styles['card']}>
              <Card.Media alt='Web' src={require('../../../../static/illustrations/web_1.svg')} mode='contain' height={200} />
              <Card.Title>
                We develop websites and web apps.
              </Card.Title>
              
              <Card.Content>
                Give your business a presence in a new world powered by technology. Don't just be online but be there in style. Let your customers discover you and get the feel of your business simply through your website. 
              </Card.Content>

              <Card.Actions>
                <Button onClick={() => this.openPage('/web')}>
                  Learn More
                  <InfoIcon style={{
                    marginLeft: `${globals.margin}px`
                  }} />
                </Button>
              </Card.Actions>
            </Card>

            <Card className={styles['card']}>
              <Card.Media alt='App' src={require('../../../../static/illustrations/app_1.svg')} mode='contain' height={200} />
              <Card.Title>
                We develop native apps.
              </Card.Title>

              <Card.Content>
                Simplify your business flow or simply make your customer's life more convenient. With our expertise, you can expect both beautiful and functional mobile and/or desktop applications for your business.
              </Card.Content>

              <Card.Actions>
                <Button onClick={() => this.openPage('/app')}>
                  Learn More
                  <InfoIcon style={{
                    marginLeft: `${globals.margin}px`
                  }} />
                </Button>
              </Card.Actions>
            </Card>
          </div>  
        </div>
      </Page.Section>
    );
  }
}
