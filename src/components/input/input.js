import React, { Component } from 'react';
import Proptypes from 'prop-types';

import styles from './input.module.scss';

export default class Input extends Component {
  static propTypes = {
    width: Proptypes.oneOf(['inline', 'full']),
    label: Proptypes.string.isRequired,
    value: Proptypes.string,
    onChange: Proptypes.func
  }

  static defaultProps = {
    width: 'inline',
    label: 'Label',
    onChange: () => console.log('value change')
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
        <div className={`${styles['label']} ${styles[mode]}`}>
          {this.props.label}
        </div>
        <input
          className={styles['input']}
          type='text' value={this.props.value}
          onChange={this.props.onChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur} />
      </div>
    );
  }
}
