import React from "react"
import "./Input.css"
const noop = () => {}
/*---------------------------------------------------------------------*/
const renderCardNumber = cardNumber => {
  const asArray = cardNumber.match(/.{1,4}/g) || []; 
  return asArray.join(" ");
}
/*---------------------------------------------------------------------*/
const renderValidThru = validThru => {              
  const asArray = validThru.match(/.{1,2}/g) || [];
  return asArray.join("/");
}
/*---------------------------------------------------------------------*/
/*---------------------------------------------------------------------*/
const Input = props => {
  const onChangeCardNumber = props.onChangeCardNumber || noop
  const onChangeValidThru = props.onChangeValidThru || noop
  const onChangeCardHolder = props.onChangeCardHolder || noop
/*---------------------------------------------------------------------*/
  return (
<div className="credit-card-form">
<div className="credit-card-form__row">
<input className="credit-card-form__input" type="text" placeholder="Card Number"
value={renderCardNumber(props.cardNumber)}
onChange={e => onChangeCardNumber(e.target.value)} />
</div>

<div className="credit-card-form__row">
<input className="credit-card-form__input" type="text" placeholder="Name"
value={props.yourName}
onChange={e => onChangeCardHolder(e.target.value)}/>
</div>

<div className="credit-card-form__row">
<input className="credit-card-form__input credit-card-form__input--2-thirds"
type="text" placeholder="Valid Thru"
value={renderValidThru(props.validThru)}
onChange={e => onChangeValidThru(e.target.value)}/>
</div>
</div>
)
}

export default Input