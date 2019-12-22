import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

import globals from '../../utils/globals.scss';
import styles from './sidebar.module.scss';

import AddIcon from '@material-ui/icons/AddCircleOutline';
import Button from '../button/button';

@inject('AppStore')
@observer
export default class SidebarContainer extends Component {
  render() {
    const { AppStore } = this.props
    return (
      AppStore.sidebar.isOpen && (<Sidebar />)
    );
  }
}

@withRouter
@inject('AppStore')
@observer
class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }

    this.closeSidebar = this.closeSidebar.bind(this)
    this.openPage = this.openPage.bind(this)
    this.checkService = this.checkService.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        ...this.state,
        isOpen: true
      })
    }, 0);
  }

  closeSidebar() {
    this.setState({
      ...this.state,
        isOpen: false
    })

    setTimeout(() => {
      this.props.AppStore.closeSidebar()
    }, styles.transDur);
  }

  openPage(url) {
    this.props.history.push(url)
    this.closeSidebar()
  }

  checkService() {
    if(this.props.location.pathname === '/web' || this.props.location.pathname === '/ecommerce' || this.props.location.pathname === '/app') {
      return true
    }

    return false
  }

  render() {
    let state = this.state.isOpen ? 'open' : 'close'

    return (
      <div className={styles['sidebar']}>
        <div className={`${styles['dimmer']} ${styles[state]}`} onClick={this.closeSidebar} />

        <div className={`${styles['menu']} ${styles[state]}`}>
          <div className={styles['branding']}>
            <img alt='Avvent Studio Branding' src={require('../../static/branding/studio_branding.svg')} />
          </div>

          <div className={styles['actions']}>
            <Button
              variant={this.props.location.pathname === '/' ? 'contained' : 'outlined'}
              color='dark'
              onClick={() => this.openPage('/')}
              style={{
                marginBottom: `${globals.margin}px`,
              }}
            >
              Home
            </Button>

            <Button
              variant={this.checkService() ? 'contained' : 'outlined'}
              color='dark'
              style={{
                marginBottom: `${globals.margin}px`,
              }}
            >
              Services
              <AddIcon
                style={{
                  marginLeft: `${globals.margin * 2}px`,
                  color: this.checkService() ? globals.light : globals.primary
                }}
              />
            </Button>

            <Button
              variant={this.props.location.pathname === '/web' ? 'contained' : 'outlined'}
              onClick={() => this.openPage('/web')}
              color='dark'
              style={{
                marginBottom: `${globals.margin}px`,
                marginLeft: `${globals.margin * 4}px`,
              }}
            >
              Website | Webapp
            </Button>

            <Button
              variant={this.props.location.pathname === '/ecommerce' ? 'contained' : 'outlined'}
              onClick={() => this.openPage('/ecommerce')}
              color='dark'
              style={{
                marginBottom: `${globals.margin}px`,
                marginLeft: `${globals.margin * 4}px`,
              }}
            >
              E-commerce
            </Button>

            <Button
              variant={this.props.location.pathname === '/app' ? 'contained' : 'outlined'}
              onClick={() => this.openPage('/app')}
              color='dark'
              style={{
                marginBottom: `${globals.margin}px`,
                marginLeft: `${globals.margin * 4}px`,
              }}
            >
              Desktop | Mobile
            </Button>

            <Button
              variant={this.props.location.pathname === '/about' ? 'contained' : 'outlined'}
              onClick={() => this.openPage('/about')}
              color='dark'
              style={{
                marginBottom: `${globals.margin}px`,
              }}
            >
              About Us
            </Button>

            <Button
              variant={this.props.location.pathname === '/contact' ? 'contained' : 'outlined'}
              onClick={() => this.openPage('/contact')}
              color='dark'
              style={{
                marginBottom: `${globals.margin}px`,
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
