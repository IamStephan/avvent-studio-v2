import React, { Component } from 'react';
import Proptypes from 'prop-types';

import styles from './button.module.scss';

class Group extends Component {
  static propTypes = {
    width: Proptypes.oneOf(['inline', 'full'])
  }
  render() {
    return (
      <div
        className={`${styles['group']} ${styles[this.props.width]}`}
        {...this.props}
      >
        {this.props.children}
      </div>
    )
  }
}

export default class Button extends Component {
  static propTypes = {
    variant: Proptypes.oneOf(['contained', 'outlined', 'ghost']),
    color: Proptypes.oneOf(['primary', 'dark']),
    state: Proptypes.oneOf(['active', 'disabled', 'loading', 'toggled']),
    width: Proptypes.oneOf(['full', 'inline'])
  }

  static defaultProps = {
    variant: 'contained',
    color: 'primary',
    state: 'active',
    width: 'inline'
  }

  static Group = Group

  render() {
    const click = this.props.state === 'active' || this.props.state === 'toggled' ? this.props.onClick : () => {}

    return (
      <div
        onClick={click}
        className={`${styles['button']} ${styles[this.props.variant]} ${styles[this.props.color]} ${styles[this.props.state]} ${styles[this.props.width]}`}
        {...this.props}
      >
        {this.props.children}
      </div>
    );
  }
}
