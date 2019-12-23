import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import Collapse from '@material-ui/core/Collapse';

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
      isOpen: false,
      serviceCollapse: false
    }

    this.closeSidebar = this.closeSidebar.bind(this)
    this.openPage = this.openPage.bind(this)
    this.checkService = this.checkService.bind(this)
    this.toggleServiceCollapse = this.toggleServiceCollapse.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        ...this.state,
        isOpen: true,
        serviceCollapse: this.checkService()
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

  toggleServiceCollapse() {
    this.setState({
      ...this.state,
      serviceCollapse: !this.state.serviceCollapse
    })
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
              variant={this.props.location.pathname === '/' ? 'contained' : 'ghost'}
              color={this.props.location.pathname === '/' ? 'primary' : 'dark'}
              onClick={() => this.openPage('/')}
              style={{
                marginBottom: `${globals.margin}px`,
                marginRight: `${globals.margin}px`,
                marginLeft: `${globals.margin}px`,
              }}
            >
              Home
            </Button>

            <Button
              variant={this.checkService() ? 'contained' : 'ghost'}
              color={this.checkService() ? 'primary' : 'dark'}
              style={{
                marginBottom: `${globals.margin}px`,
                marginRight: `${globals.margin}px`,
                marginLeft: `${globals.margin}px`,
              }}
              onClick={this.toggleServiceCollapse}
            >
              Services
              <AddIcon
                style={{
                  marginLeft: `${globals.margin * 2}px`,
                  color: this.checkService() ? globals.light : globals.primary
                }}
              />
            </Button>

            <Collapse in={this.state.serviceCollapse}>
              <div className={styles['collapse']}>
                <Button
                  variant={this.props.location.pathname === '/web' ? 'contained' : 'ghost'}
                  onClick={() => this.openPage('/web')}
                  color='light'
                  style={{
                    marginBottom: `${globals.margin}px`
                  }}
                >
                  Website | Webapp
                </Button>

                <Button
                  variant={this.props.location.pathname === '/ecommerce' ? 'contained' : 'ghost'}
                  onClick={() => this.openPage('/ecommerce')}
                  color='light'
                  style={{
                    marginBottom: `${globals.margin}px`
                  }}
                >
                  E-commerce
                </Button>

                <Button
                  variant={this.props.location.pathname === '/app' ? 'contained' : 'ghost'}
                  onClick={() => this.openPage('/app')}
                  color='light'
                  style={{
                    marginBottom: `${globals.margin}px`
                  }}
                >
                  Desktop | Mobile
                </Button>
              </div>
            </Collapse>

            

            <Button
              variant={this.props.location.pathname === '/about' ? 'contained' : 'ghost'}
              onClick={() => this.openPage('/about')}
              color={this.props.location.pathname === '/about' ? 'primary' : 'dark'}
              style={{
                marginBottom: `${globals.margin}px`,
                marginRight: `${globals.margin}px`,
                marginLeft: `${globals.margin}px`,
              }}
            >
              About Us
            </Button>

            <Button
              variant={this.props.location.pathname === '/contact' ? 'contained' : 'ghost'}
              onClick={() => this.openPage('/contact')}
              color={this.props.location.pathname === '/contact' ? 'primary' : 'dark'}
              style={{
                marginBottom: `${globals.margin}px`,
                marginRight: `${globals.margin}px`,
                marginLeft: `${globals.margin}px`,
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
