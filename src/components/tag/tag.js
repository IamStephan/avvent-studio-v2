import React, { Component } from 'react';
import Proptypes from 'prop-types';

import styles from './tag.module.scss';

export default class Tag extends Component {
  static propTypes = {
    variant: Proptypes.oneOf(['contained', 'outlined']),
    color: Proptypes.oneOf(['primary', 'secondary', 'light', 'dark'])
  }

  static defaultProps = {
    variant: 'contained',
    color: 'primary'
  }

  render() {
    return (
      <div className={`${styles['tag']} ${styles[this.props.variant]} ${styles[this.props.color]}`}>
        {this.props.children}
      </div>
    );
  }
}
