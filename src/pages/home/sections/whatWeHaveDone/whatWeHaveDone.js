import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';

import styles from './whatWeHaveDone.module.scss';

import Page from '../../../../components/pageTemplate/pageTemplate';
import ArrowIcon from '@material-ui/icons/PlayCircleFilled';
import Card from '../../../../components/card/card';
import Tag from '../../../../components/tag/tag';
import Button from '../../../../components/button/button';

@inject('PortfolioStore')
@observer
export default class WhatWeHaveDone extends Component {
  constructor(props) {
    super(props)

    this.state = {
      whatWeHaveDone: {
        currentIndex: 0,
        transitionState: 'end'
      }
    }

    this.changeCard = this.changeCard.bind(this)
    this.openWindow = this.openWindow.bind(this)
  }

  openWindow(url) {
    window.open(url)
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
      <Page.Section navbarMode='primary' display='flex'>
        <Page.SectionTitle>What we have done.</Page.SectionTitle>
          
        <div className={styles['whatWeHaveDone']}>
          <div className={styles['left']}>
            <img alt='spot' src={require('../../../../static/illustrations/spot_1.svg')} />

            <h1 className={`${styles['header']} ${styles[this.state.whatWeHaveDone.transitionState]}`}>
              {PortfolioStore.projects[this.state.whatWeHaveDone.currentIndex].title}
            </h1>

            <div className={`${styles['tags']} ${styles[this.state.whatWeHaveDone.transitionState]}`}>
              {PortfolioStore.projects[this.state.whatWeHaveDone.currentIndex].tags.map((item, i) => (
                <Tag key={i} color='secondary'>
                  {item}
                </Tag>
              ))}
            </div>

            <p className={`${styles['content']} ${styles[this.state.whatWeHaveDone.transitionState]}`}>
              {PortfolioStore.projects[this.state.whatWeHaveDone.currentIndex].description}
            </p>

            <div className={`${styles['actions']} ${styles[this.state.whatWeHaveDone.transitionState]}`}>
              <Button onClick={() => this.openWindow(PortfolioStore.projects[this.state.whatWeHaveDone.currentIndex].url)}>
                Visit Site
              </Button>
            </div>

            <div className={styles['controls']}>
              <div onClick={() => this.changeCard('left')} className={styles['left-control']}>
                <ArrowIcon />
              </div>

              <div className={styles['center']}>
                <div className={styles['circle']} />

                <div className={styles['line']}>
                  <img alt='Girl Jump' src={require('../../../../static/illustrations/girl_jump.svg')} />
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
    );
  }
}
