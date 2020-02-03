import React from 'react';

const Pricing = function(props) {
  if (props.id % 15 === 0) {
    return (
      <div>
        <span id="tom-pricing">${(props.price*0.9).toFixed(2)}</span><span id="tom-pricing-secondary">  Was ${props.price}</span><br />
        <span id="tom-pricing-discount">SAVE 10% through 02/29/2020</span>
      </div>
    )
  } else {
    return (
      <div>
        <span id="tom-pricing">${props.price}</span>
      </div>
    )
  }
};

/*
  <div>
    <div id="pd-pricing grid-100 grid-parent v-spacing-medium">
      <div id="pd-price grid-100">
        <div id="met-product-price v-spacing-mini" data-met-type="regular">
          <span id="primary-font jumbo strong art-pd-price">$3.98 or {this.props.price}</span>
        </div>
      </div>
    </div>
  </div>
*/

export default Pricing;