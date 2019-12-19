import React, { Component, PureComponent } from 'react';
import Proptypes from 'prop-types';

import styles from './navbar.module.scss';

import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import Button from '../button/button';

export default class Navbar extends PureComponent {
  static propTypes = {
    mode: Proptypes.oneOf(['light', 'primary']).isRequired,
    sectionNum: Proptypes.number.isRequired
  }

  static defaultProps = {
    mode: 'light',
    sectionNum: 0
  }

  constructor(props) {
    super(props)

    this.state = {
      windowWidth: 0
    }

    this.getWindowWidth = this.getWindowWidth.bind(this)
    this.handleScroll = this.handleScroll.bind(this)

    this.nav = React.createRef()
  }

  componentDidMount() {
    window.addEventListener('resize', this.getWindowWidth)
    this.handleScroll(this.props.sectionNum)
    
    this.getWindowWidth()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getWindowWidth)
  }

  getWindowWidth() {
    if (window.innerWidth === this.state.windowWidth) return

    this.setState({
      ...this.state,
      windowWidth: window.innerWidth
    })
  }

  handleScroll(sectionNumber) {
    setInterval(() => {
      this.nav.current.style.top = `${window.scrollY - (sectionNumber * window.innerHeight)}px`
    }, 0)
  }

  render() {
    return (
      <nav
        ref={this.nav}
        className={`${styles['navbar']} ${styles[this.props.mode]}`}
      >
        <section className={styles['branding']}>
          {
            this.props.mode === 'light' ? (
              <img src={require('../../static/branding/studio_logo.svg')} />
            ) : (
              <img src={require('../../static/branding/studio_logo_white.svg')} />
            )
          }
        </section>

        {
          this.state.windowWidth > styles.breakpointOne ? (
            <section className={styles['actions']}>
              <Button
                color={this.props.mode === 'light' ? 'primary' : 'light'}
              >
                Home
              </Button>

              <Button color={this.props.mode === 'light' ? 'dark' : 'light'} variant='ghost'>
                Services
              </Button>

              <Button color={this.props.mode === 'light' ? 'dark' : 'light'} variant='ghost'>
                About Us
              </Button>

              <Button color={this.props.mode === 'light' ? 'dark' : 'light'} variant='ghost'>
                Contact Us
              </Button>
            </section>
          ) : (
            <section className={styles['actions-mobile']}>
              <Button>
                <MenuOpenIcon />
              </Button>
            </section>
          )
        }
      </nav>
    );
  }
}
