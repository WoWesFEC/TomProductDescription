/* eslint-disable linebreak-style */
/* eslint-disable no-else-return */
import React from 'react';

const Warranty = function WarrantyFunc(props) {
  if (props.id % 19 === 0) {
    return (
      <img className="tom-warranty-resize" src="../images/WarrantySnip.PNG" alt="Warranty Info" />
    );
  } else {
    return null;
  }
};

export default Warranty;
