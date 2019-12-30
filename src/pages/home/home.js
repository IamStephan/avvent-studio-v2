import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';

import globals from '../../utils/globals.scss';
import styles from './home.module.scss';

import InfoIcon from '@material-ui/icons/InfoOutlined';
import ArrowIcon from '@material-ui/icons/PlayCircleFilled';
import Page from '../../components/pageTemplate/pageTemplate';
import Button from '../../components/button/button';
import Card from '../../components/card/card';

@inject('PortfolioStore')
@observer
export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      whatWeHaveDone: {
        currentIndex: 0,
        transitionState: 'end'
      }
    }

    this.changeCard = this.changeCard.bind(this)
  }

  changeCard(direction) {
    if(this.state.whatWeHaveDone.transitionState === 'start') return
    
    if(direction === 'right') {
      if(this.state.whatWeHaveDone.currentIndex < this.props.PortfolioStore.projects.length - 1) {
        this.setState({
          ...this.state,
          whatWeHaveDone: {
            ...this.state.whatWeHaveDone,
            transitionState: 'start'
          }
        })

        setTimeout(() => {
          this.setState({
            ...this.state,
            whatWeHaveDone: {
              ...this.state.whatWeHaveDone,
              transitionState: 'end',
              currentIndex: this.state.whatWeHaveDone.currentIndex + 1
            }
          })
        }, styles.whatWeHaveDonetransitionDur);
      } else {
        this.setState({
          ...this.state,
          whatWeHaveDone: {
            ...this.state.whatWeHaveDone,
            transitionState: 'start'
          }
        })

        setTimeout(() => {
          this.setState({
            ...this.state,
            whatWeHaveDone: {
              ...this.state.whatWeHaveDone,
              transitionState: 'end',
              currentIndex: 0
            }
          })
        }, styles.whatWeHaveDonetransitionDur);
      }
    } else {
      if(this.state.whatWeHaveDone.currentIndex === 0) {
        this.setState({
          ...this.state,
          whatWeHaveDone: {
            ...this.state.whatWeHaveDone,
            transitionState: 'start'
          }
        })

        setTimeout(() => {
          this.setState({
            ...this.state,
            whatWeHaveDone: {
              ...this.state.whatWeHaveDone,
              transitionState: 'end',
              currentIndex: this.props.PortfolioStore.projects.length - 1
            }
          })
        }, styles.whatWeHaveDonetransitionDur);
      } else {
        this.setState({
          ...this.state,
          whatWeHaveDone: {
            ...this.state.whatWeHaveDone,
            transitionState: 'start'
          }
        })

        setTimeout(() => {
          this.setState({
            ...this.state,
            whatWeHaveDone: {
              ...this.state.whatWeHaveDone,
              transitionState: 'end',
              currentIndex: this.state.whatWeHaveDone.currentIndex - 1
            }
          })
        }, styles.whatWeHaveDonetransitionDur);
      }
    }
  }

  render() {
    const { PortfolioStore } = this.props
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
              <div count={1} className={styles['img-container']}>
                <img alt='We Conceptualize.' src={require('../../static/illustrations/we_conceptualize.svg')} />
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
                 asud hasui dhasi ioa jdoaisj doai jdoiaj sdoiasj oais oiasj doais jdoias doiad joais aois jdoais jdaois doias joiasj d
              </div>
            </div>

            <div className={styles['row']}>
              <div count={2} className={styles['img-container']}>
                <img alt='We Conceptualize.' src={require('../../static/illustrations/we_design.svg')} />
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
                 asud hasui dhasi ioa jdoaisj doai jdoiaj sdoiasj oais oiasj doais jdoias doiad joais aois jdoais jdaois doias joiasj d
              </div>
            </div>

            <div className={styles['row']}>
              <div count={3} className={styles['img-container']}>
                <img alt='We Conceptualize.' src={require('../../static/illustrations/we_develop.svg')} />
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
                 asud hasui dhasi ioa jdoaisj doai jdoiaj sdoiasj oais oiasj doais jdoias doiad joais aois jdoais jdaois doias joiasj d
              </div>
            </div>

            <div className={styles['row']}>
              <div count={4} className={styles['img-container']}>
                <img alt='We Conceptualize.' src={require('../../static/illustrations/we_test.svg')} />
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
                 asud hasui dhasi ioa jdoaisj doai jdoiaj sdoiasj oais oiasj doais jdoias doiad joais aois jdoais jdaois doias joiasj d
              </div>
            </div>

            <div className={styles['row']}>
              <div count={5} className={styles['img-container']}>
                <img alt='We Conceptualize.' src={require('../../static/illustrations/we_revise.svg')} />
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
                 asud hasui dhasi ioa jdoaisj doai jdoiaj sdoiasj oais oiasj doais jdoias doiad joais aois jdoais jdaois doias joiasj d
              </div>
            </div>

            <div className={styles['row']}>
              <div count={6} className={styles['img-container']}>
                <img alt='We Conceptualize.' src={require('../../static/illustrations/we_release.svg')} />
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
                 asud hasui dhasi ioa jdoaisj doai jdoiaj sdoiasj oais oiasj doais jdoias doiad joais aois jdoais jdaois doias joiasj d
              </div>
            </div>
          </div>
        </Page.Section>

        <Page.Section navbarMode='primary' display='flex'>
          <Page.SectionTitle>What we have done.</Page.SectionTitle>
          
          <div className={styles['whatWeHaveDone']}>
            <div className={styles['left']}>
              <img alt='spot' src={require('../../static/illustrations/spot_1.svg')} />

              <h1 className={`${styles['header']} ${styles[this.state.whatWeHaveDone.transitionState]}`}>
                {PortfolioStore.projects[this.state.whatWeHaveDone.currentIndex].title}
              </h1>

              <p className={`${styles['content']} ${styles[this.state.whatWeHaveDone.transitionState]}`}>
                {PortfolioStore.projects[this.state.whatWeHaveDone.currentIndex].description}
              </p>

              <div className={styles['controls']}>
                <div onClick={() => this.changeCard('left')} className={styles['left-control']}>
                  <ArrowIcon />
                </div>

                <div className={styles['center']}>
                  <div className={styles['circle']} />

                  <div className={styles['line']}>
                    <img alt='Girl Jump' src={require('../../static/illustrations/girl_jump.svg')} />
                  </div>

                  <div className={styles['circle']} />
                </div>

                <div onClick={() => this.changeCard('right')} className={styles['right-control']}>
                  <ArrowIcon />
                </div>
              </div>
            </div>

            <div className={`${styles['right']} ${styles[this.state.whatWeHaveDone.transitionState]}`}>
              <div className={styles['card-container']}>
                <Card className={styles['card']}>
                  <Card.Media
                    src={this.state.whatWeHaveDone.transitionState === 'end' ? PortfolioStore.projects[this.state.whatWeHaveDone.currentIndex].img : null}
                    mode='cover'
                    height={450}
                  />
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
