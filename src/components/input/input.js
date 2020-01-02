import React, { Component } from 'react';
import Proptypes from 'prop-types';

import globals from '../../utils/globals.scss';
import styles from './input.module.scss';

export default class Input extends Component {
  static propTypes = {
    width: Proptypes.oneOf(['inline', 'full']),
    label: Proptypes.string.isRequired,
    value: Proptypes.string,
    onChange: Proptypes.func,
    rows: Proptypes.number,
    color: Proptypes.oneOf(['light', 'dark']),
    isRequired: Proptypes.bool,
    error: Proptypes.bool,
    labelAss: Proptypes.string.isRequired
  }

  static defaultProps = {
    width: 'inline',
    label: 'Label',
    onChange: () => console.log('value change'),
    rows: 1,
    color: 'light',
    isRequired: false,
    error: false
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
    const mode = (this.props.value !== '' || this.state.isFocus) ? 'focus' : 'blur'
    const error = this.props.error ? 'error' : null

    return (
      <div className={`${styles['inputContainer']} ${styles[this.props.width]}`}>
        <label htmlFor={this.props.labelAss} className={`${styles['label']} ${styles[mode]} ${styles[this.props.color]}`}>
          {this.props.label} {' '}
          {
            this.props.isRequired ? (
              <span
                style={{
                  color: globals.secondary
                }}
              >
                *
              </span>
            ) : null
          }
        </label>
        {
          this.props.rows > 1 ? (
            <textarea
              className={`${styles['input']} ${styles[this.props.color]} ${styles[error]}`}
              type='text'
              value={this.props.value}
              onChange={this.props.onChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              rows={this.props.rows}
              id={this.props.labelAss}
            />
          ) : (
            <input
              className={`${styles['input']} ${styles[this.props.color]} ${styles[error]}`}
              type='text' value={this.props.value}
              onChange={this.props.onChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              id={this.props.labelAss}
            />
          )
        }
        
      </div>
    );
  }
}
