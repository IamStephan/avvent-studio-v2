import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';

import styles from './notifications.module.scss';

import InfoIcon from '@material-ui/icons/Info';
import WarnIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';

@inject('NotificationStore')
@observer
export default class Notifications extends Component {
  render() {
    const { NotificationStore } = this.props

    return (
      <div className={`${styles['notification-container']}`}>
        {
          NotificationStore.notifications.map((item, i) => (
            <div key={i} className={styles['notification']}>
              <div className={styles['icon']}>
                {
                  item.type === 'info' ? (
                    <InfoIcon />
                  ) : item.type === 'warn' ? (
                    <WarnIcon />
                  ) : (
                    <ErrorIcon />
                  )
                }
              </div>
              <div className={styles['content']}>
                <h3>
                  {item.title}
                </h3>
                <div>
                  {typeof item.message === 'string' ? item.message : (
                    <ul>
                      {item.message.map((mess, i) => (
                        <li key={i}>
                          {mess}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}
