import React from 'react';

const LowStock = function(props) {
  if (props.id % 13 === 0) {
    return (
      <h4 className="tom-lowStock">Hurry! Low in stock.</h4>
    )
  } else {
    return null;
  }
}

export default LowStock;