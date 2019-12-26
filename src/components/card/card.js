import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './card.module.scss';

class CardMedia extends PureComponent {
  static propTypes = {
    mode: PropTypes.oneOf(['contain', 'cover']),
    customHeight: PropTypes.bool
  }

  static defaultProps = {
    height: 150,
    mode: 'contain'
  }

  render() {
    return (
      <div
        style={{
          height: `${this.props.height}px`
        }}
        className={`${styles['card-media']} ${styles[this.props.mode]} ${this.props.className}`}
      >
        <img alt={this.props.alt} src={this.props.src} />
      </div>
    )
  }
}

class CardActions extends PureComponent {
  static propTypes = {
    align: PropTypes.oneOf(['left', 'center', 'right'])
  }

  static defaultProps = {
    align: 'center'
  }

  render() {
    return (
      <div className={`${styles['card-actions']} ${styles[this.props.align]}`}>
        {this.props.children}
      </div>
    )
  }
}

class CardContent extends PureComponent {
  render() {
    return (
      <div className={styles['card-content']}>
        {this.props.children}
      </div>
    )
  }
}

class CardTitle extends PureComponent {
  render() {
    return (
      <h2 className={styles['card-title']}>
        {this.props.children}
      </h2>
    )
  }
}

export default class Card extends PureComponent {
  static propTypes = {
    mode: PropTypes.oneOf(['light', 'primary'])
  }

  static defaultProps = {
    mode: 'light'
  }

  static Media = CardMedia
  static Title = CardTitle
  static Content = CardContent
  static Actions = CardActions

  render() {
    return (
      <div className={`${styles['card']} ${styles[this.props.mode]} ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}
