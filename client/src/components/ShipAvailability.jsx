import React from 'react';

const ShipAvailability = function(props) {
  let deliveryStatus = '';
  if (props.price > 45) {
    deliveryStatus = 'FREE Delivery';
  } else {
    deliveryStatus = 'Shipping & Delivery';
  }

  if (props.id % 14 === 0) {
    return (
      <div className="tom-grid-ship">
        <img src="../images/LowesTruck.png" alt="Shipping Truck" className="tom-truck"></img>
        <h4 className="tom-shipping-note">{deliveryStatus}</h4>
        <div>
          <img src="../images/NoShipping.png" alt="unavailable"></img>
          <span>Currently unavailable</span>
        </div>
      </div>
    )
  } else if (props.id % 21 === 0) {
    return (
      <div className="tom-grid-ship">
        <img src="../images/LowesTruck.png" alt="Shipping Truck" className="tom-truck"></img>
        <h4 className="tom-shipping-note">{deliveryStatus}</h4>
        <div>
          <img src="../images/greenCheckbox.png" alt="Green Checkbox"></img>
          <span>Ready for delivery: Estimated on 02/29/2020</span>
        </div>
      </div>
    )
  } else {
    return (
      <div className="tom-grid-ship">
        <img src="../images/LowesTruck.png" alt="Shipping Truck" className="tom-truck"></img>
        <h4 className="tom-shipping-note">{deliveryStatus}</h4>
        <div>
          <img src="../images/greenCheckbox.png" alt="Green Checkbox"></img>
          <span>Available!</span>
        </div>
      </div>
    )
  }
}

export default ShipAvailability;