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
    this.getColorForIcon = this.getColorForIcon.bind(this)
    this.openPage = this.openPage.bind(this)
    this.openService = this.openService.bind(this)
    this.closeService = this.closeService.bind(this)
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

  getColorForSelected(path) {
    let selected = this.props.location.pathname === path

    if(selected) {
      if (this.props.mode === 'light') return 'primary'
      else return 'light'
    } else {
      if (this.props.mode === 'light') return 'dark'
      else return 'light'
    }
  }

  getColorForIcon(path) {
    let selected = this.props.location.pathname === path

    if(selected) {
      if (this.props.mode === 'light') return globals.light
      else return globals.primary
    } else {
      if (this.props.mode === 'light') return globals.primary
      else return globals.light
    }
  }

  openPage(url) {
    this.props.history.push(url)
  }

  openService() {
    window.addEventListener('resize', () => this.props.AppStore.setOffset(this.ServicesButton.current.getBoundingClientRect().x))

    this.props.AppStore.openServiceDropdown(this.ServicesButton.current.getBoundingClientRect().x)
  }

  closeService() {
    window.removeEventListener('resize', () => this.props.AppStore.setOffset(this.ServicesButton.current.getBoundingClientRect().x))

    this.props.AppStore.closeServiceDropdown()
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
              <img src={require('../../static/branding/studio_logo_white.svg')} />
            </section>

            {
              this.state.windowWidth > styles.breakpointOne ? (
                <section className={styles['actions']}>
                  <Button
                    color={this.props.location.pathname === '/' ? 'primary' : 'light'}
                    variant={this.props.location.pathname === '/' ? 'contained' : 'ghost'}
                    onClick={() => this.openPage('/')}
                  >
                    Home
                  </Button>

                  <Button
                    color={this.props.location.pathname === '/notyet' ? 'primary' : 'light'}
                    variant={this.props.location.pathname === '/notyet' ? 'contained' : 'ghost'}
                    onClick={() => this.openService()}
                  >
                    Services
                    <AddIcon style={{
                      marginLeft: `${globals.margin * 2}px`,
                      color: this.props.location.pathname === '/notyet' ? globals.light : globals.primary
                    }} />
                    <span ref={this.ServicesButton} />
                  </Button>

                  <Button
                    color={this.props.location.pathname === '/about' ? 'primary' : 'light'}
                    variant={this.props.location.pathname === '/about' ? 'contained' : 'ghost'}
                    onClick={() => this.openPage('/about')}
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
                  <Button color='primary'>
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
                      variant='ghost'
                      color='light'
                    >
                        Website | Webapp
                      </Button>
                    <Button
                      variant='ghost'
                      color='light'
                    >
                      E-commerce
                    </Button>
                    <Button
                      variant='ghost' 
                      color='light'
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
                color={this.getColorForSelected('/')}
                variant={this.props.location.pathname === '/' ? 'contained' : 'ghost'}
                onClick={() => this.openPage('/')}
              >
                Home
              </Button>

              <Button
                color={this.getColorForSelected('/notyet')}
                variant={this.props.location.pathname === '/notyet' ? 'contained' : 'ghost'}
                onClick={() => this.openService()}
              >
                Services
                <AddIcon
                  style={{
                    marginLeft: `${globals.margin * 2}px`,
                    color: this.getColorForIcon('/notyet')
                  }}
                />
                <span ref={this.ServicesButton} />
              </Button>

              <Button
                color={this.getColorForSelected('/about')}
                variant={this.props.location.pathname === '/about' ? 'contained' : 'ghost'}
                onClick={() => this.openPage('/about')}
              >
                About Us
              </Button>

              <Button
                color={this.getColorForSelected('/contact')}
                variant={this.props.location.pathname === '/contact' ? 'contained' : 'ghost'}
                onClick={() => this.openPage('/contact')}
              >
                Contact Us
              </Button>
            </section>
          ) : (
            <section className={styles['actions-mobile']}>
              <Button color={this.props.mode === 'light' ? 'primary' : 'light'}>
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
                  variant='ghost'
                  color={this.props.mode === 'light' ? 'light' : 'dark'}
                >
                    Website | Webapp
                  </Button>
                <Button
                  variant='ghost'
                  color={this.props.mode === 'light' ? 'light' : 'dark'}
                >
                  E-commerce
                </Button>
                <Button
                  variant='ghost' 
                  color={this.props.mode === 'light' ? 'light' : 'dark'}
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
