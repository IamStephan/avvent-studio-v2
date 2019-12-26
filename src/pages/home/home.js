import React, { Component } from 'react';

import globals from '../../utils/globals.scss';
import styles from './home.module.scss';

import InfoIcon from '@material-ui/icons/InfoOutlined';
import ArrowIcon from '@material-ui/icons/PlayCircleFilled';
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
                  Push your business across the borders and grow by allowing customers to buy your products directly from your website. That way you are able to maintain the look and you feel of your business.
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
                  Give your business a presence in a new world powered by technology. Don't just be online but be there in style. Let your customers discover you and get the feel of your business simply through your website. 
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
                  Simplify your business flow or simply make your customer's life more convenient. With our expertise you can expect both beautiful and functional mobile and/or desktop application for your business.
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

          <div className={styles['howWeDoIt']}>
            <div className={styles['row']}>
              <div className={styles['item']} count='1'>
                <img alt='We conceptualize.' src={require('../../static/illustrations/we_conceptualize.svg')} />
              </div>
            </div>

            <div className={styles['row']}>
              <div className={styles['item']} count='2'>
                <img alt='We design.' src={require('../../static/illustrations/we_design.svg')} />
              </div>

              <div className={styles['item']} count='3'>
                <img alt='We develop.' src={require('../../static/illustrations/we_develop.svg')} />
              </div>
            </div>

            <div className={styles['row']}>
              <div className={styles['item']} count='4'>
                <img alt='We test.' src={require('../../static/illustrations/we_test.svg')} />
              </div>

              <div className={styles['item']} count='5'>
                <img alt='We revise.' src={require('../../static/illustrations/we_revise.svg')} />
              </div>
            </div>

            <div className={styles['row']}>
              <div className={styles['item']} count='6'>
                <img alt='We release.' src={require('../../static/illustrations/we_release.svg')} />
              </div>
            </div>
          </div>
        </Page.Section>

        <Page.Section navbarMode='primary' display='flex'>
          <Page.SectionTitle>What we have done.</Page.SectionTitle>
          
          <div className={styles['whatWeHaveDone']}>
            <div className={styles['left']}>
              <img alt='spot' src={require('../../static/illustrations/spot_1.svg')} />

              <h1 className={styles['header']}>
                Gerimed Mobility
              </h1>

              <p className={styles['content']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet sit amet cursus sit amet dictum sit amet justo. Nisi porta lorem mollis aliquam ut porttitor leo a. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim.
              </p>

              <div className={styles['controls']}>
                <div className={styles['left-control']}>
                  <ArrowIcon />
                </div>

                <div className={styles['center']}>
                  <div className={styles['circle']} />

                  <div className={styles['line']}>
                    <img alt='Girl Jump' src={require('../../static/illustrations/girl_jump.svg')} />
                  </div>

                  <div className={styles['circle']} />
                </div>

                <div className={styles['right-control']}>
                  <ArrowIcon />
                </div>
              </div>
            </div>

            <div className={styles['right']}>
              <div className={styles['card-container']}>
                <Card className={styles['card']}>
                  <Card.Media src={require('../../static/screenshots/mobility-home.png')} mode='cover' height={450} />
                </Card>
              </div>
            </div>
          </div>
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
