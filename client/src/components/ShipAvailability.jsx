/* eslint-disable linebreak-style */
/* eslint-disable no-else-return */
import React from 'react';

const ShipAvailability = function ShipAvail(props) {
  let deliveryStatus = '';
  if (props.price > 45) {
    deliveryStatus = 'FREE Delivery';
  } else {
    deliveryStatus = 'Shipping & Delivery';
  }

  if (props.id % 14 === 0) {
    return (
      <div className="tom-grid-ship">
        <img src="../images/LowesTruck.png" alt="Shipping Truck" className="tom-truck" />
        <h4 className="tom-shipping-note">{deliveryStatus}</h4>
        <div>
          <div className="tom-shipping-icon">
            <img src="../images/NoShipping.png" alt="unavailable" />
          </div>
          <div className="tom-shipping-text">
            <span>Currently unavailable</span>
          </div>
        </div>
      </div>
    );
  } else if (props.id % 21 === 0) {
    return (
      <div className="tom-grid-ship">
        <img src="../images/LowesTruck.png" alt="Shipping Truck" className="tom-truck" />
        <h4 className="tom-shipping-note">{deliveryStatus}</h4>
        <div>
          <div className="tom-shipping-icon">
            <img src="../images/greenCheckbox.png" alt="Green Checkbox" />
          </div>
          <div className="tom-shipping-text">
            <span>Ready for delivery: Estimated on 02/29/2020</span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="tom-grid-ship">
        <img src="../images/LowesTruck.png" alt="Shipping Truck" className="tom-truck" />
        <h4 className="tom-shipping-note">{deliveryStatus}</h4>
        <div>
          <div className="tom-shipping-icon">
            <img src="../images/greenCheckbox.png" alt="Green Checkbox" />
          </div>
          <div className="tom-shipping-text">
            <span>Available!</span>
          </div>
        </div>
      </div>
    );
  }
};

export default ShipAvailability;
