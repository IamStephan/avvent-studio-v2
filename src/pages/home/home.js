import React, { Component } from 'react';

import globals from '../../utils/globals.scss';
import styles from './home.module.scss';

import InfoIcon from '@material-ui/icons/InfoOutlined';
import Page from '../../components/pageTemplate/pageTemplate';
import Button from '../../components/button/button';
import Card from '../../components/card/card';

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
            <img alt='Hero illustration' src={require('../../static/illustrations/hero.svg')} />
          </div>
        </Page.Section>

        <Page.Section navbarMode='primary'>
          <Page.SectionTitle>What we do.</Page.SectionTitle>

          <div className={styles['card-container']}>
            <div className={styles['cards']}>
              <Card>
                <Card.Media alt='E-commerce' src={require('../../static/illustrations/ecommerce_1.svg')} mode='contain' height={200} />

                <Card.Title>
                  We develop E-commerce sites.
                </Card.Title>

                <Card.Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id eu nisl nunc mi ipsum faucibus.
                </Card.Content>

                <Card.Actions>
                  <Button>
                    Learn More
                    <InfoIcon style={{
                      marginLeft: `${globals.margin}px`
                    }} />
                  </Button>
                </Card.Actions>
              </Card>

              <Card className={styles['second']}>
                <Card.Media alt='Web' src={require('../../static/illustrations/web_1.svg')} mode='contain' height={200} />
                <Card.Title>
                  We develop websites and web apps.
                </Card.Title>

                <Card.Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id eu nisl nunc mi ipsum faucibus.
                </Card.Content>

                <Card.Actions>
                  <Button>
                    Learn More
                    <InfoIcon style={{
                      marginLeft: `${globals.margin}px`
                    }} />
                  </Button>
                </Card.Actions>
              </Card>

              <Card>
                <Card.Media alt='App' src={require('../../static/illustrations/app_1.svg')} mode='contain' height={200} />
                <Card.Title>
                  We develop native apps.
                </Card.Title>

                <Card.Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id eu nisl nunc mi ipsum faucibus.
                </Card.Content>

                <Card.Actions>
                  <Button>
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

        <Page.Section navbarMode='light'>
          <Page.SectionTitle>
            How we do it
            <span style={{
              color: globals.primary
            }}>
              .
            </span>
          </Page.SectionTitle>
        </Page.Section>

        <Page.Section navbarMode='primary'>
          <Page.SectionTitle>What we have done.</Page.SectionTitle>
        </Page.Section>
        
        <Page.Section navbarMode='light'>
          <Page.SectionTitle>
            Let us do it
            <span style={{
              color: globals.primary
            }}>
              .
            </span>
          </Page.SectionTitle>
        </Page.Section>
      </Page>
    );
  }
}
