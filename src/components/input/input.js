import React, { Component } from 'react';
import Proptypes from 'prop-types';

import styles from './input.module.scss';

export default class Input extends Component {
  static propTypes = {
    width: Proptypes.oneOf(['inline', 'full']),
    label: Proptypes.string.isRequired,
    value: Proptypes.string,
    onChange: Proptypes.func,
    rows: Proptypes.number,
    color: Proptypes.oneOf(['light', 'dark'])
  }

  static defaultProps = {
    width: 'inline',
    label: 'Label',
    onChange: () => console.log('value change'),
    rows: 1,
    color: 'light'
  }

  constructor(props) {
    super(props)

    this.state = {
      isFocus: false
    }

    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleFocus() {
    this.setState({
      ...this.state,
      isFocus: true
    })
  }

  handleBlur() {
    if(this.props.value) return
    
    this.setState({
      ...this.state,
      isFocus: false
    })
  }

  render() {
    const mode = this.state.isFocus ? 'focus' : 'blur'

    return (
      <div className={`${styles['inputContainer']} ${styles[this.props.width]}`}>
        <div className={`${styles['label']} ${styles[mode]} ${styles[this.props.color]}`}>
          {this.props.label}
        </div>
        {
          this.props.rows > 1 ? (
            <textarea
              className={`${styles['input']} ${styles[this.props.color]}`}
              type='text' value={this.props.value}
              onChange={this.props.onChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              rows={this.props.rows}
            />
          ) : (
            <input
              className={`${styles['input']} ${styles[this.props.color]}`}
              type='text' value={this.props.value}
              onChange={this.props.onChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
          )
        }
        
      </div>
    );
  }
}
