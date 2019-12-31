import React, { Component } from 'react';

import globals from '../../utils/globals.scss';
import styles from './footer.module.scss';

import CopyrightIcon from '@material-ui/icons/Copyright';
import ArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Button from '../button/button';

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles['footer']}>
        <section>
          <Button variant='ghost'>
            <CopyrightIcon style={{
              marginRight: `${globals.margin}px`
            }} />
            Avvent Studio 2020
          </Button>
        </section>

        <section>
          <Button onClick={() => window.scroll({top: 0, behavior: 'smooth'})} shape='round'>
            <ArrowUpIcon />
          </Button>
        </section>
      </footer>
    );
  }
}
