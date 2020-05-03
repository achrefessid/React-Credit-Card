import React, { Component } from 'react'
import CreditCard from './Components/CreditCard'
import Input from './Components/Input'
import './App.css'

const normalizeCardNumber = cardNumber => {
  return cardNumber.replace(/[^0-9]/g, '').slice(0, 16)
}
/*---------------------------------------------------------------------*/
const normalizeMonth = month => {
  if (month.length <= 1) return month
  const normalizedMonth = Math.max(1, Math.min(12, month))
    .toString() 
    .padStart(2, '0')
  return normalizedMonth
}

const normalizeYear = year => {
  if (year.length <= 1) return year
  return Math.max(20, Math.min(24, year))
}
/*--------------*/
const normalizeValidThru = validThru => {
  validThru = validThru.replace(/[^0-9]/g, '').slice(0, 4)  
  let month = validThru.slice(0, 2)
  let year = validThru.slice(2)
  return normalizeMonth(month) + normalizeYear(year)
}
/*---------------------------------------------------------------------*/
const normalizeCardHolder = yourName => {         
  return yourName
    .replace(/[^a-z ]/gi, "")   
    .trimLeft()
    .slice(0, 20);
};
/*---------------------------------------------------------------------*/
/*---------------------------------------------------------------------*/
class App extends Component {
  state = {
    cardNumber: '',           // a string of 16 digits
    cardHolderName: '',       // a string of max 18 letters and spaces
    validThru: ''             // a string of 4 numbers, MM/YY
    // where MM between [1, 12]
    // and YY between [20, 24]
  }
/*-------------*/
 constructor(props) {
    super(props)
    this.setCardNumber = this.setCardNumber.bind(this)
    this.setCardHolderName = this.setCardHolderName.bind(this)
    this.setValidThru = this.setValidThru.bind(this)
  }

  setCardNumber(newCardNumber) {
    this.setState({
      cardNumber: normalizeCardNumber(newCardNumber)
    })
  }

  setCardHolderName(newCardHolderName) {
    this.setState({
      cardHolderName: normalizeCardHolder(newCardHolderName)
    })
  }

  setValidThru(newValidThru) {
    this.setState({
      validThru: normalizeValidThru(newValidThru)
    })
  }
/*---------------------------------------------------------------------*/
  render() {
    let { cardNumber, cardHolderName, validThru } = this.state;
    let { setCardNumber, setCardHolderName, setValidThru } = this;

    return (
      <div>
        <div className="app-container">
          <div className="app-content-item">
            <CreditCard
              cardNumber={cardNumber}
              yourName={cardHolderName}
              validThru={validThru} />
          </div>

          <div className="app-content-item">
            <Input
              cardNumber={cardNumber}
              onChangeCardNumber={setCardNumber}
              yourName={cardHolderName}
              onChangeCardHolder={setCardHolderName}
              validThru={validThru}
              onChangeValidThru={setValidThru} />
          </div>
        </div>
      </div>
    )
  }
}

export default App