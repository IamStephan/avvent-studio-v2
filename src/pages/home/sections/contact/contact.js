import React, { Component } from 'react';

import globals from '../../../../utils/globals.scss';
import styles from './contact.module.scss';

import Page from '../../../../components/pageTemplate/pageTemplate';
import Input from '../../../../components/input/input';
import Button from '../../../../components/button/button';

export default class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contact: {
        first: '',
        last: '',
        email: '',
        projectDesc: ''
      }
    }

    this.onContactChange = this.onContactChange.bind(this)
  }

  onContactChange(property, value) {
    switch (property) {
      case 'first':
        this.setState({
          ...this.state,
          contact: {
            ...this.state.contact,
            first: value
          }
        })
        break;

      case 'last':
        this.setState({
          ...this.state,
          contact: {
            ...this.state.contact,
            last: value
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
          Let us do it
          <span style={{
            color: globals.primary
          }}>
            .
          </span>
        </Page.SectionTitle>
        <div className={styles['contact']}>
          <div className={styles['left']}>
            <img alt='Contact us' src={require('../../../../static/illustrations/contact_2.svg')} />
          </div>

          <div className={styles['right']}>
            <form className={styles['form']} onSubmit={(e) => e.preventDefault()}>
              <div className={styles['bg']} />

              <div className={styles['row']}>
                <h2 className={styles['title']}>
                  Contact Us
                </h2>
              </div>

              <div className={styles['row']}>
                <Input
                  color='dark'
                  label='First Name'
                  value={this.state.contact.first}
                  onChange={(e) => this.onContactChange('first', e.target.value)}
                  width='full'
                />
                <Input
                  color='dark'
                  label='Last Name'
                  value={this.state.contact.last}
                  onChange={(e) => this.onContactChange('last', e.target.value)}
                  width='full'
                />
              </div>
              
              <div className={styles['row']}>
                <Input
                  color='dark'
                  label='Email'
                  value={this.state.contact.email}
                  onChange={(e) => this.onContactChange('email', e.target.value)}
                  width='full'
                />
              </div>

              <div className={styles['row']}>
                <Input
                  color='dark'
                  label='Project Description'
                  value={this.state.contact.projectDesc}
                  onChange={(e) => this.onContactChange('projectDesc', e.target.value)}
                  width='full'
                  rows={4}
                />
              </div>
              <div className={styles['action']}>
                <Button color='light' variant='outlined' style={{
                  marginRight: `${globals.margin}px`
                }}>
                  Clear Form
                </Button>
                <Button color='light'>
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Page.Section>
    );
  }
}
