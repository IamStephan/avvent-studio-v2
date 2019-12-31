import React, { Component } from 'react';

import globals from '../../../../utils/globals.scss';
import styles from './contact.module.scss';

import Page from '../../../../components/pageTemplate/pageTemplate';
import Input from '../../../../components/input/input';

export default class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contact: {
        name: '',
        email: '',
        projectDesc: ''
      }
    }

    this.onContactChange = this.onContactChange.bind(this)
  }

  onContactChange(property, value) {
    switch (property) {
      case 'name':
        this.setState({
          ...this.state,
          contact: {
            ...this.state.contact,
            name: value
          }
        })
        break;

      case 'email':
        this.setState({
          ...this.state,
          contact: {
            ...this.state.contact,
            email: value
          }
        })
        break;

      case 'projectDesc':
        this.setState({
          ...this.state,
          contact: {
            ...this.state.contact,
            projectDesc: value
          }
        })
        break;
    
      default:
        break;
    }
  }

  render() {
    return (
      <Page.Section navbarMode='light' display='flex'>
        <Page.SectionTitle>
          Let us work together
          <span style={{
            color: globals.primary
          }}>
            .
          </span>
        </Page.SectionTitle>
        <div className={styles['contact']}>
          <div className={styles['left']}>
            <form onSubmit={(e) => e.preventDefault()}>
              <Input label='Name' value={this.state.contact.name} onChange={(e) => this.onContactChange('name', e.target.value)} />
            </form>
          </div>

          <div className={styles['right']}>

          </div>
        </div>
      </Page.Section>
    );
  }
}
