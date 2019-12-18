import React, { Component } from 'react';

import styles from './navbar.module.scss';

import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import Button from '../button/button';

export default class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      windowWidth: 0
    }

    this.getWindowWidth = this.getWindowWidth.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.getWindowWidth)
    
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

  render() {
    return (
      <nav className={styles['navbar']}>
        <section className={styles['branding']}>
          <img src={require('../../static/branding/studio_logo.svg')} />
        </section>

        {
          this.state.windowWidth > styles.breakpointOne ? (
            <section className={styles['actions']}>
              <Button>
                Home
              </Button>

              <Button variant='ghost'>
                Services
              </Button>

              <Button variant='ghost'>
                About Us
              </Button>

              <Button variant='ghost'>
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
