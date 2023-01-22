import React from 'react'
import { render } from 'react-dom'
import Card from 'react-credit-cards'
import './pay.css'
import PaymentNav from '../Checkout/PaymentNav'
import { toast } from 'react-hot-toast';

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate
} from './util'

import 'react-credit-cards/es/styles-compiled.css'
import { useNavigate } from 'react-router-dom';

export default class Pay extends React.Component {
  
    state = {
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    issuer: '',
    focused: '',
    formData: null
  }

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer })
    }
  }
  

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name
    })
  }

  handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value)
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value)
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value)
    }

    this.setState({ [target.name]: target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    alert(`You have finished payment!`)
    this.form.reset()
    // navigate("/")
    window.location.href="/"
  }

  render () {
    
    const { name, number, expiry, cvc, focused, issuer } = this.state
    // const navigate= useNavigate()
    return (
      <div key='Payment' id='body'>
        <div className='App-payment'>
          <h1 className='head'>Enter your payment details.</h1>
          <h4 className='head'>100% safe and secure</h4>
          <Card
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focused}
            callback={this.handleCallback}
          />
          <form ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <small>Name on card:</small>

              <input
                type='text'
                name='name'
                className='form-control'
                placeholder='Name *'
                pattern='[a-z A-Z-]+'
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className='form-group'>
              <small>Card Number:</small>

              <input
                type='tel'
                name='number'
                className='form-control'
                placeholder='Card Number *'
                pattern='[\d| ]{16,22}'
                maxLength='19'
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>

            <div className='form-group'>
              <small>Expiration Date:</small>

              <input
                type='tel'
                name='expiry'
                className='form-control'
                placeholder='Valid Thru *'
                pattern='\d\d/\d\d'
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className='form-group'>
              <small>CVC:</small>

              <input
                type='tel'
                name='cvc'
                className='form-control'
                placeholder='CVC *'
                pattern='\d{3}'
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <input type='hidden' name='issuer' value={issuer} />
            <div className='form-actions'>
              <button   className='button-pay'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

render(<Pay />, document.getElementById('root'))