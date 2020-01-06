import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';

import globals from '../../../../utils/globals.scss';
import styles from './contact.module.scss';

import Page from '../../../../components/pageTemplate/pageTemplate';
import Input from '../../../../components/input/input';
import Button from '../../../../components/button/button';

@inject('NotificationStore')
@observer
export default class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contact: {
        first: {
          value: '',
          error: false
        },
        last: {
          value: '',
          error: false
        },
        email: {
          value: '',
          error: false
        },
        projectDesc: {
          value: '',
          error: false
        },
        loadingButton: false
      }
    }

    this.setStateAsync = this.setStateAsync.bind(this)
    this.onContactChange = this.onContactChange.bind(this)
    this.clearContact = this.clearContact.bind(this)
    this.onSubmitForm = this.onSubmitForm.bind(this)
    this.validateEmail = this.validateEmail.bind(this)
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }

  onContactChange(property, value) {
    switch (property) {
      case 'first':
        this.setState({
          ...this.state,
          contact: {
            ...this.state.contact,
            first: {
              value: value,
              error: false
            }
          }
        })
        break;

      case 'last':
        this.setState({
          ...this.state,
          contact: {
            ...this.state.contact,
            last: {
              value: value,
              error: false
            }
          }
        })
        break;

      case 'email':
        this.setState({
          ...this.state,
          contact: {
            ...this.state.contact,
            email: {
              value: value,
              error: false
            }
          }
        })
        break;

      case 'projectDesc':
        this.setState({
          ...this.state,
          contact: {
            ...this.state.contact,
            projectDesc: {
              value: value,
              error: false
            }
          }
        })
        break;
    
      default:
        break;
    }
  }

  clearContact() {
    this.setState({
      ...this.state,
      contact: {
        ...this.state.contact,
        first: {
          value: '',
          error: false
        },
        last: {
          value: '',
          error: false
        },
        email: {
          value: '',
          error: false
        },
        projectDesc: {
          value: '',
          error: false
        }
      }
    })
  }

  async onSubmitForm() {
    let errors = []

    await this.setStateAsync({
      ...this.state,
      contact: {
        ...this.state.contact,
        loadingButton: true
      }
    })

    if(!this.state.contact.first.value || this.state.contact.first.value.length === 0 || /^\s*$/.test(this.state.contact.first.value)) {
      await this.setStateAsync({
        ...this.state,
        contact: {
          ...this.state.contact,
          first: {
            ...this.state.contact.first,
            error: true
          }
        }
      })
      errors.push('First name is invalid.')
    }

    if(!this.state.contact.last.value || this.state.contact.last.value.length === 0 || /^\s*$/.test(this.state.contact.last.value)) {
      await this.setStateAsync({
        ...this.state,
        contact: {
          ...this.state.contact,
          last: {
            ...this.state.contact.last,
            error: true
          }
        }
      })
      errors.push('Last name is invalid.')
    }

    if(!this.validateEmail(this.state.contact.email.value)) {
      await this.setStateAsync({
        ...this.state,
        contact: {
          ...this.state.contact,
          email: {
            ...this.state.contact.email,
            error: true
          }
        }
      })
      errors.push('Email name is invalid.')
    }
    
    if(!this.state.contact.projectDesc.value || this.state.contact.projectDesc.value.length === 0 || /^\s*$/.test(this.state.contact.projectDesc.value)) {
      await this.setStateAsync({
        ...this.state,
        contact: {
          ...this.state.contact,
          projectDesc: {
            ...this.state.contact.projectDesc,
            error: true
          }
        }
      })
      errors.push('Project description name is invalid.')
    }

    if(errors.length) {
      this.props.NotificationStore.AddNotification('error', 'From Invalid', errors)

      await this.setStateAsync({
        ...this.state,
        contact: {
          ...this.state.contact,
          loadingButton: false
        }
      })
    } else {
      let PostRequest = {
        customData: {
          name: `${this.state.contact.first.value} ${this.state.contact.first.value}`,
          email: this.state.contact.email,
          projectDesc: this.state.contact.projectDesc.value
        }
      }

      try{
        const response = await fetch("https://studio.avvent.io/.netlify/functions/contact", {
          method: "POST",
          body: JSON.stringify(PostRequest),
        })
      
        if (!response.ok) {
          this.props.NotificationStore.AddNotification('error', 'Error', 'Your form has not been submited')

          await this.setStateAsync({
            ...this.state,
            contact: {
              ...this.state.contact,
              loadingButton: false
            }
          })
          return
        }

        await this.setStateAsync({
          ...this.state,
          contact: {
            ...this.state.contact,
            loadingButton: false
          }
        })

        this.clearContact()
        this.props.NotificationStore.AddNotification('info', 'Success', 'Your form has been submited, Thank you!')
          
      } catch(e){
        await this.setStateAsync({
          ...this.state,
          contact: {
            ...this.state.contact,
            loadingButton: false
          }
        })
        
        this.props.NotificationStore.AddNotification('error', 'Error', 'Your form has not been submited')
      }

      this.clearContact()
    }
  }

  validateEmail(email) {
    let regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    return regexEmail.test(email)
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
            <img alt='Contact us' src={require('../../../../static/illustrations/contact_3.svg')} />
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
                  value={this.state.contact.first.value}
                  onChange={(e) => this.onContactChange('first', e.target.value)}
                  width='full'
                  isRequired
                  error={this.state.contact.first.error}
                  labelAss='first'
                />
                <Input
                  color='dark'
                  label='Last Name'
                  value={this.state.contact.last.value}
                  onChange={(e) => this.onContactChange('last', e.target.value)}
                  width='full'
                  isRequired
                  error={this.state.contact.last.error}
                  labelAss='last'
                />
              </div>
              
              <div className={styles['row']}>
                <Input
                  color='dark'
                  label='Email'
                  value={this.state.contact.email.value}
                  onChange={(e) => this.onContactChange('email', e.target.value)}
                  width='full'
                  isRequired
                  error={this.state.contact.email.error}
                  labelAss='email'
                />
              </div>

              <div className={styles['row']}>
                <Input
                  color='dark'
                  label='Project Description'
                  value={this.state.contact.projectDesc.value}
                  onChange={(e) => this.onContactChange('projectDesc', e.target.value)}
                  width='full'
                  rows={4}
                  isRequired
                  error={this.state.contact.projectDesc.error}
                  labelAss='projectDesc'
                />
              </div>
              <div className={styles['action']}>
                <Button
                  color='light'
                  variant='outlined'
                  style={{
                    marginRight: `${globals.margin}px`
                  }}
                  onClick={this.clearContact}
                >
                  Clear Form
                </Button>
                <Button onClick={this.onSubmitForm} color='light' state={this.state.contact.loadingButton ? 'loading' : 'active'}>
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
