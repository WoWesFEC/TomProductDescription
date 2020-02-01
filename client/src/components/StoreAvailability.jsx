import React from 'react';
import OtherStoresModal from './OtherStoresModal.jsx';

class StoreAvailability extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.id % 21 === 0) {
      return (
        <div className="tom-grid-store">
          <div>
            <img src="../images/LowesStore.PNG" alt="Store Icon"></img>
            <h4>Ships to Store FREE</h4>
            <p>Ready for pickup: Estimated by 02/29/2020</p>
            <OtherStoresModal close={this.props.storesClose} stores={this.props.stores} id={this.props.id} />
          </div>
        </div>
      )
    } else if (this.props.id % 24 === 0) {
      return (
        <div className="tom-grid-store">
          <div>
            <img src="../images/LowesStore.PNG" alt="Store Icon"></img>
            <h4>FREE Store Pickup</h4>
            <p>Unavailable for Pickup at S.E. Austin WoWe's</p>
            <OtherStoresModal close={this.props.storesClose} stores={this.props.stores} id={this.props.id} />
          </div>
        </div>
      )
    } else if (this.props.id % 9 === 3) {
      return (
        <div className="tom-grid-store">
          <div>
            <img src="../images/LowesStore.PNG" alt="Store Icon"></img>
            <h4>Ships to Store FREE</h4>
            <p>Available for Pickup at S.E. Austin WoWe's</p>
            <OtherStoresModal close={this.props.storesClose} stores={this.props.stores} id={this.props.id} />
          </div>
        </div>
      )
    } else {
      return (
        <div className="tom-grid-store">
          <div>
            <img src="../images/LowesStore.PNG" alt="Store Icon"></img>
            <h4>Ships to Store FREE</h4>
            <p>{this.props.id % 9} available for Pickup at S.E. Austin WoWe's</p>
            <div><strong>Aisle</strong> {this.props.id % 48}, <strong>Bay</strong> {this.props.id % 42}</div>
            <OtherStoresModal close={this.props.storesClose} stores={this.props.stores} id={this.props.id} />
          </div>
        </div>
      )
    }
  }
}

export default StoreAvailability;