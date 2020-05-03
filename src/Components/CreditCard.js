import React from "react"
import "./CreditCard.css"
/*---------------------------------------------------------------------*/
const renderCardNumber = cardNumber => {               
    const asString = cardNumber.padEnd(16, "●");
    const asArray = asString.match(/.{1,4}/g) || [];   //every 4 numbers in an element
    return asArray.join(" ");
  }
/*---------------------------------------------------------------------*/
const renderValidThru = validThru => {          /
    const asString = validThru.padEnd(4, "●");
    const asArray = asString.match(/.{1,2}/g) || [];
    return asArray.join("/");
  };
/*---------------------------------------------------------------------*/
const renderYourName = yourName => {           
    return yourName.toUpperCase() || "your name here".toUpperCase() 
}
/*---------------------------------------------------------------------*/
const CreditCard = props => (
<div class="credit-card-wrap">
<div class="mk-icon-world-map"></div>
<div class="credit-card-inner">
<header class="header">
<div class="credit-logo">
<div class="shape"><span class="txt">MS</span></div> <span class="text">Public Bank of Ms</span>
</div>
</header>
<div class="mk-icon-sim"></div>

<div class="credit-font credit-card-number" data-text="">{renderCardNumber(props.cardNumber)}</div>  
<footer class="footer">
<div class="clearfix">
<div class="pull-left">
<div class="credit-card-date"><span class="title">Expires End</span>

<span class="credit-font">{renderValidThru(props.validThru)}</span></div>

<div class="credit-font credit-author">{renderYourName(props.yourName)}</div>
</div>
<div class="pull-right"><div class="mk-icon-visa"></div></div>
</div>
</footer>
</div>
</div>
)

export default CreditCard