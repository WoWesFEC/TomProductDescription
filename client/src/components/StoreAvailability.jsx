import React from 'react';
//import StoreImage from '../images/LowesStore.PNG';

const StoreAvailability = (props) => (
  <div>
    <img src="../images/LowesStore.PNG" alt="Store Icon"></img>
    <h3>FREE Store Pickup</h3>
    <div>9 available today at S.E. Austin Lowe's!</div>
    <div><strong>Aisle</strong> 67, <strong>Bay</strong> 93</div>
    <div className="pd-other-stores grid-100 v-spacing-large hide-print">
      <a href="#" className="js-store-locator-search btn btn-secondary btn-small met-check-other-stores">Check Other Stores</a>
    </div>
  </div>
)

export default StoreAvailability;