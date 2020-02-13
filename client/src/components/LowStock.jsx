/* eslint-disable linebreak-style */
/* eslint-disable no-else-return */
import React from 'react';

const LowStock = function StockCheck(props) {
  if (props.id % 13 === 0) {
    return (
      <div>
        <h4 className="tom-lowStock">Hurry! Low in stock.</h4>
      </div>
    );
  } else {
    return null;
  }
};

export default LowStock;
