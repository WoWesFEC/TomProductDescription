import React from 'react';

const Pricing = function(props) {
  if (props.id % 15 === 0) {
    return (
      <div>
        <span id="tom-pricing"><span id="tom-dollar-sign">$</span>{(props.price*0.9).toFixed(2)}</span><span id="tom-pricing-secondary">  Was ${props.price}</span><br />
        <span id="tom-pricing-discount">SAVE 10% through 02/29/2020</span>
      </div>
    )
  } else {
    return (
      <div>
        <span id="tom-pricing"><span id="tom-dollar-sign">$</span>{props.price}</span>
      </div>
    )
  }
};

export default Pricing;