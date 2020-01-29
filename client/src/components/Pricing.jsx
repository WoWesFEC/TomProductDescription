import React from 'react';

const Pricing = (props) => (
  //conditional rendering. if onSale === true, display onSale price as normal, then also show expiration date of sale and standard price
  <div>
    <h3>${props.price}</h3>
  </div>
)

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