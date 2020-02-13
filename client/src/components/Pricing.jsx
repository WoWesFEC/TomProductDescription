/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';

const Pricing = function PriceFunc({ id, price }) {
  if (id % 15 === 0) {
    return (
      <div>
        <span id="tom-pricing">
          <span id="tom-dollar-sign">$</span>
          {(price * 0.9).toFixed(2)}
        </span>
        <span id="tom-pricing-secondary">
          {' '}
          Was $
          {price}
        </span>
        <br />
        <span id="tom-pricing-discount">SAVE 10% through 02/29/2020</span>
      </div>
    );
  }
  return (
    <div>
      <span id="tom-pricing">
        <span id="tom-dollar-sign">$</span>
        {price}
      </span>
    </div>
  );
};

export default Pricing;
