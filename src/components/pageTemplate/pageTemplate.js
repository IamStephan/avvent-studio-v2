import React, { Component, Fragment } from 'react';
import Proptypes from 'prop-types';
import { Helmet } from 'react-helmet';

import styles from './pageTemplate.module.scss';

import Navbar from '../navbar/navbar';

class Section extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clipSupport: false
    }
  }

  componentDidMount() {
    if(navigator.userAgent.indexOf('Firefox') !== -1) {
      this.setState({
        ...this.state,
        clipSupport: true
      })
    }
  }

  render() {
    const clipSupport = this.state.clipSupport ? 'no-clip' : 'clip'

    return (
      <section className={`${styles['section']} ${styles[clipSupport]}`}>
        {
          this.state.clipSupport ? (
            <div className={`${styles['section-navbar-no-clip']}`}>
              <Navbar mode={this.props.navbarMode} branding={this.props.branding} clipSupport={this.state.clipSupport} />
            </div>
          ) : (
            <div className={`${styles['section-navbar']}`}>
              <Navbar mode={this.props.navbarMode} branding={this.props.branding} clipSupport={this.state.clipSupport} />
            </div>
          )
        }
        
        <div className={`${styles['section-content']} ${this.props.className}`}>
          {this.props.children}
        </div>
      </section>
    )
  }
}

export default class Page extends Component {
  static propTypes = {
    title: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired,
    keywords: Proptypes.array
  }

  static Section = Section

  render() {
    return (
      <Fragment>
        <Helmet>
          <meta name="keywords" content={this.props.keywords ? this.props.keywords.join(', ') : ''} />
          <meta name="description" content={this.props.description} />
          <title>
            {this.props.title}
          </title>
        </Helmet>

        <div className={styles['page']}>
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}
