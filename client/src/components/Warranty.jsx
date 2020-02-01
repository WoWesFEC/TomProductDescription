import React from 'react';
//import WarrantySnip from '../images/WarrantySnip.PNG';

const Warranty = function(props) {
  if (props.id % 19 === 0) {
    return (
      <img className="tom-warranty-resize" src="../images/WarrantySnip.PNG" alt="Warranty Info"></img>
    )
  } else {
    return null;
  }
}

export default Warranty;