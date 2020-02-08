/* eslint-disable linebreak-style */
/* eslint-disable no-mixed-operators */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-else-return */
/* eslint-disable react/prop-types */
import React from 'react';

class StoreAvailability extends React.Component {
  render() {
    const { id } = this.props;
    if (id % 21 === 0) {
      return (
        <div className="tom-grid-store">
          <div>
            <img src="../images/LowesStore.PNG" alt="Store Icon" className="tom-shipping-box" />
            <h4 className="tom-shipping-note">Ships to Store FREE</h4>
            <div className="tom-shipping-icon">
              <img src="../images/greenCheckbox.png" alt="Green Checkbox" />
            </div>
            <div className="tom-shipping-text">
              <span>Ready for pickup: Estimated by 02/29/2020</span>
            </div>
          </div>
        </div>
      );
    } else if (id % 24 === 0) {
      return (
        <div className="tom-grid-store">
          <div>
            <img src="../images/LowesStore.PNG" alt="Store Icon" className="tom-shipping-box" />
            <h4 className="tom-shipping-note">FREE Store Pickup</h4>
            <div>
              <div className="tom-shipping-icon">
                <img src="../images/NoShipping.png" alt="unavailable" />
              </div>
              <div className="tom-shipping-text">
                <span>Unavailable for Pickup at S.E. Austin WoWe&apos;s</span>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (id % 9 === 3) {
      return (
        <div className="tom-grid-store">
          <div>
            <img src="../images/LowesStore.PNG" alt="Store Icon" className="tom-shipping-box" />
            <h4 className="tom-shipping-note">Ships to Store FREE</h4>
            <div>
              <div className="tom-shipping-icon">
                <img src="../images/greenCheckbox.png" alt="Green Checkbox" />
              </div>
              <div className="tom-shipping-text">
                <span>Available for Pickup at S.E. Austin WoWe&apos;s</span>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="tom-grid-store">
          <div>
            <img src="../images/LowesStore.PNG" alt="Store Icon" className="tom-shipping-box" />
            <h4 className="tom-shipping-note">Ships to Store FREE</h4>
            <div>
              <div className="tom-shipping-icon">
                <img src="../images/greenCheckbox.png" alt="Green Checkbox" />
              </div>
              <div className="tom-shipping-text">
                <span>
                  {id % 9}
                  {' '}
                  available for Pickup at S.E. Austin WoWe&apos;s
                </span>
              </div>
              <div className="tom-store-item-location">
                <strong>Aisle</strong>
                {' '}
                {id % 48 + 1}
                ,
                {' '}
                <strong>Bay</strong>
                {' '}
                {id % 42 + 1}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default StoreAvailability;
