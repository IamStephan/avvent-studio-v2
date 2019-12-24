import React, { Component } from 'react';

import styles from './loader.module.scss';

import Button from '../button/button';

export default class Loader extends Component {
  render() {
    if(this.props.error) {
      return (
        <div className={styles['error']}>
          <h1>Oh no...</h1>
          <h3>There seems to be an error.</h3>
          <Button onClick={() => this.props.retry}>Try again</Button>
        </div>
      )
    } else if(this.props.timedOut) {
      return (
        <div className={styles['timed-out']}>
          <h1>Oops...</h1>
          <h3>The page took too long to load.</h3>
          <Button onClick={() => this.props.retry}>Try again</Button>
        </div>
      )
    }
    return (
      <div className={styles['loader']}>
        <div className={styles['letter']}>
          A
          <div className={styles['dot']} />
        </div>
      </div>
    );
  }
}
