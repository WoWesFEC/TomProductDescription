import React from 'react';
//import OtherStoresModal from './OtherStoresModal.jsx';

class StoreAvailability extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.id % 21 === 0) {
      return (
        <div className="tom-grid-store">
          <div>
            <img src="../images/LowesStore.PNG" alt="Store Icon" className="tom-shipping-box"></img>
            <h4 className="tom-shipping-note">Ships to Store FREE</h4>
            <img src="../images/GreenCheckbox.PNG" alt="Green Checkbox"></img><p>Ready for pickup: Estimated by 02/29/2020</p>
          </div>
        </div>
      )
    } else if (this.props.id % 24 === 0) {
      return (
        <div className="tom-grid-store">
          <div>
            <img src="../images/LowesStore.PNG" alt="Store Icon" className="tom-shipping-box"></img>
            <h4 className="tom-shipping-note">FREE Store Pickup</h4>
            <img src="../images/NoShipping.png" alt="unavailable"></img><p>Unavailable for Pickup at S.E. Austin WoWe's</p>
          </div>
        </div>
      )
    } else if (this.props.id % 9 === 3) {
      return (
        <div className="tom-grid-store">
          <div>
            <img src="../images/LowesStore.PNG" alt="Store Icon" className="tom-shipping-box"></img>
            <h4 className="tom-shipping-note">Ships to Store FREE</h4>
            <img src="../images/GreenCheckbox.PNG" alt="Green Checkbox"></img><p>Available for Pickup at S.E. Austin WoWe's</p>
          </div>
        </div>
      )
    } else {
      return (
        <div className="tom-grid-store">
          <div>
            <img src="../images/LowesStore.PNG" alt="Store Icon" className="tom-shipping-box"></img>
            <h4 className="tom-shipping-note">Ships to Store FREE</h4>
            <p><img src="../images/GreenCheckbox.PNG" alt="Green Checkbox"></img><span>{this.props.id % 9} available for Pickup at S.E. Austin WoWe's</span></p>
            <div><strong>Aisle</strong> {this.props.id % 48 + 1}, <strong>Bay</strong> {this.props.id % 42 + 1}</div>
          </div>
        </div>
      )
    }
  }
}

export default StoreAvailability;