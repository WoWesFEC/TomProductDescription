import React from 'react';

const SaveOnly = function(props) {
  if (props.saved === false) {
    return (
      <div>
        <a href="#save" id="left btn btn-secondary btn-large btn-block" onClick={props.saveFavorite}><i aria-hidden="true" className="icon-heart-outline"></i> <span>SAVE</span></a>
      </div>
    )
  } else {
    return (
      <div>
        <a href="#save" className="tom-saved"> <span>SAVED</span></a>
      </div>
    )
  }
}

export default SaveOnly;