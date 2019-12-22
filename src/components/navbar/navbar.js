import React, { Fragment, PureComponent } from 'react';
import Proptypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

import globals from '../../utils/globals.scss';
import styles from './navbar.module.scss';

import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import AddIcon from '@material-ui/icons/AddCircleOutline';
import Button from '../button/button';

@withRouter
@inject('AppStore')
@observer
export default class Navbar extends PureComponent {
  static propTypes = {
    mode: Proptypes.oneOf(['light', 'primary']).isRequired,
    branding: Proptypes.number.isRequired,
    clipSupport: Proptypes.bool
  }

  static defaultProps = {
    mode: 'light',
    branding: 0,
    clipSupport: false
  }

  constructor(props) {
    super(props)

    this.state = {
      windowWidth: 0,
      serviceDropdownOffset: 0
    }

    this.ServicesButton = React.createRef()

    this.getWindowWidth = this.getWindowWidth.bind(this)
    this.getColorForSelected = this.getColorForSelected.bind(this)
    this.openPage = this.openPage.bind(this)
    this.openService = this.openService.bind(this)
    this.closeService = this.closeService.bind(this)
    this.setOffset = this.setOffset.bind(this)
    this.checkService = this.checkService.bind(this)
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

  getColorForSelected(selected, mode) {
    let selectedLight
    let selectedDark
    let unselectedLight
    let unselectedDark

    switch (mode) {
      case 'icon':
        selectedLight = globals.light
        selectedDark = globals.primary
        unselectedLight = globals.primary
        unselectedDark = globals.light
        break;

      case 'dropdown':
        selectedLight = 'light'
        selectedDark = 'primary'
        unselectedLight = 'light'
        unselectedDark = 'dark'
        break;
    
      default:
        selectedLight = 'primary'
        selectedDark = 'light'
        unselectedLight = 'dark'
        unselectedDark = 'light'
        break;
    }

    if(selected) {
      if (this.props.mode === 'light') return selectedLight
      else return selectedDark
    } else {
      if (this.props.mode === 'light') return unselectedLight
      else return unselectedDark
    }
  }

  openPage(url) {
    this.props.history.push(url)
  }

  openService() {
    window.addEventListener('resize', () => this.setOffset())

    this.props.AppStore.openServiceDropdown(this.ServicesButton.current.getBoundingClientRect().x)
  }

  closeService() {
    window.removeEventListener('resize', () => this.setOffset())

    this.props.AppStore.closeServiceDropdown()
  }

  setOffset() {
    if(this.state.windowWidth > styles.breakpointOne) {
      this.props.AppStore.setOffset(this.ServicesButton.current.getBoundingClientRect().x)
    } else {
      this.props.AppStore.closeServiceDropdown()
    }
  }

  checkService() {
    if(this.props.location.pathname === '/web' || this.props.location.pathname === '/ecommerce' || this.props.location.pathname === '/app') {
      return true
    }

    return false
  }

  render() {
    const { AppStore } = this.props
 
    if(this.props.clipSupport) {
      if(this.props.branding === 1) {
        return (
          <nav
            className={`${styles['navbar']} ${styles['no-clip']}`}
          >
            <section className={styles['branding']}>
              <img alt='Studio logo' src={require('../../static/branding/studio_logo_white.svg')} />
            </section>

            {
              this.state.windowWidth > styles.breakpointOne ? (
                <section className={styles['actions']}>
                  <Button
                    color={this.props.location.pathname === '/' ? 'primary' : 'light'}
                    variant={this.props.location.pathname === '/' ? 'contained' : 'ghost'}
                    onClick={() => this.openPage('/')}
                    style={{
                      marginRight: `${globals.margin}px`
                    }}
                  >
                    Home
                  </Button>

                  <Button
                    color={this.checkService() ? 'primary' : 'light'}
                    variant={this.checkService() ? 'contained' : 'ghost'}
                    onClick={() => this.openService()}
                    style={{
                      marginRight: `${globals.margin}px`
                    }}
                  >
                    Services
                    <AddIcon style={{
                      marginLeft: `${globals.margin * 2}px`,
                      color: this.checkService() ? globals.light : globals.primary
                    }} />
                    <span ref={this.ServicesButton} />
                  </Button>

                  <Button
                    color={this.props.location.pathname === '/about' ? 'primary' : 'light'}
                    variant={this.props.location.pathname === '/about' ? 'contained' : 'ghost'}
                    onClick={() => this.openPage('/about')}
                    style={{
                      marginRight: `${globals.margin}px`
                    }}
                  >
                    About Us
                  </Button>

                  <Button
                    color={this.props.location.pathname === '/contact' ? 'primary' : 'light'}
                    variant={this.props.location.pathname === '/contact' ? 'contained' : 'ghost'}
                    onClick={() => this.openPage('/contact')}
                  >
                    Contact Us
                  </Button>
                </section>
              ) : (
                <section className={styles['actions-mobile']}>
                  <Button onClick={() => AppStore.openSidebar()} color='primary'>
                    <MenuOpenIcon />
                  </Button>
                </section>
              )
            }

            {
              AppStore.serviceDropdown.isOpen && (
                <Fragment>
                  <div onClick={() => this.closeService()} className={styles['dimmer']} />

                  <div
                    className={`${styles['dropdown']} ${styles['dark']}`}
                    style={{
                      left: `${AppStore.serviceDropdown.offset}px`
                    }}
                  >
                    <Button
                      color={this.props.location.pathname === '/web' ? 'primary' : 'light'}
                      variant={this.props.location.pathname === '/web' ? 'contained' : 'ghost'}
                      onClick={() => this.openPage('/web')}
                      style={{
                        marginBottom: `${globals.margin}px`,
                      }}
                    >
                        Website | Webapp
                      </Button>
                    <Button
                      color={this.props.location.pathname === '/ecommerce' ? 'primary' : 'light'}
                      variant={this.props.location.pathname === '/ecommerce' ? 'contained' : 'ghost'}
                      onClick={() => this.openPage('/ecommerce')}
                      style={{
                        marginBottom: `${globals.margin}px`,
                      }}
                    >
                      E-commerce
                    </Button>
                    <Button
                      color={this.props.location.pathname === '/app' ? 'primary' : 'light'}
                      variant={this.props.location.pathname === '/app' ? 'contained' : 'ghost'}
                      onClick={() => this.openPage('/app')}
                    >
                      Mobile | Desktop
                    </Button>
                  </div>
                </Fragment>
                
              )
            }
          </nav>
        )
      } else {
        return null
      }
    }

    return (
      <nav
        className={`${styles['navbar']} ${styles[this.props.mode]}`}
      >
        <section className={styles['branding']}>
          {
            this.props.mode === 'light' ? (
              <img alt='Studio Logo' src={require('../../static/branding/studio_logo.svg')} />
            ) : (
              <img alt='Studio Logo' src={require('../../static/branding/studio_logo_white.svg')} />
            )
          }
        </section>

        {
          this.state.windowWidth > styles.breakpointOne ? (
            <section className={styles['actions']}>
              <Button
                color={this.getColorForSelected(this.props.location.pathname === '/')}
                variant={this.props.location.pathname === '/' ? 'contained' : 'ghost'}
                onClick={() => this.openPage('/')}
                style={{
                  marginRight: `${globals.margin}px`
                }}
              >
                Home
              </Button>

              <Button
                color={this.getColorForSelected(this.checkService())}
                variant={this.checkService() ? 'contained' : 'ghost'}
                onClick={() => this.openService()}
                style={{
                  marginRight: `${globals.margin}px`
                }}
              >
                Services
                <AddIcon
                  style={{
                    marginLeft: `${globals.margin * 2}px`,
                    color: this.getColorForSelected(this.checkService(), 'icon')
                  }}
                />
                <span ref={this.ServicesButton} />
              </Button>

              <Button
                color={this.getColorForSelected(this.props.location.pathname === '/about')}
                variant={this.props.location.pathname === '/about' ? 'contained' : 'ghost'}
                onClick={() => this.openPage('/about')}
                style={{
                  marginRight: `${globals.margin}px`
                }}
              >
                About Us
              </Button>

              <Button
                color={this.getColorForSelected(this.props.location.pathname === '/contact')}
                variant={this.props.location.pathname === '/contact' ? 'contained' : 'ghost'}
                onClick={() => this.openPage('/contact')}
              >
                Contact Us
              </Button>
            </section>
          ) : (
            <section className={styles['actions-mobile']}>
              <Button
                color={this.props.mode === 'light' ? 'primary' : 'light'}
                onClick={() => AppStore.openSidebar()}
              >
                <MenuOpenIcon />
              </Button>
            </section>
          )
        }

        {
          AppStore.serviceDropdown.isOpen && (
            <Fragment>
              <div onClick={() => this.closeService()} className={styles['dimmer']} />

              <div
                className={`${styles['dropdown']} ${styles[this.props.mode]}`}
                style={{
                  left: `${AppStore.serviceDropdown.offset}px`
                }}
              >
                <Button
                  color={this.getColorForSelected(this.props.location.pathname === '/web', 'dropdown')}
                  variant={this.props.location.pathname === '/web' ? 'contained' : 'ghost'}
                  onClick={() => this.openPage('/web')}
                  style={{
                    marginBottom: `${globals.margin}px`,
                  }}
                >
                    Website | Webapp
                  </Button>
                <Button
                  color={this.getColorForSelected(this.props.location.pathname === '/ecommerce', 'dropdown')}
                  variant={this.props.location.pathname === '/ecommerce' ? 'contained' : 'ghost'}
                  onClick={() => this.openPage('/ecommerce')}
                  style={{
                    marginBottom: `${globals.margin}px`,
                  }}
                >
                  E-commerce
                </Button>
                <Button
                  color={this.getColorForSelected(this.props.location.pathname === '/app', 'dropdown')}
                  variant={this.props.location.pathname === '/app' ? 'contained' : 'ghost'}
                  onClick={() => this.openPage('/app')}
                >
                  Mobile | Desktop
                </Button>
              </div>
            </Fragment>
            
          )
        }
        
      </nav>
    );
  }
}
