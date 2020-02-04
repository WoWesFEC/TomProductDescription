import React from 'react';

const SaveOnly = function(props) {
  if (props.saved === false) {
    return (
      <div className="tom-unsaved">
        <img src="../images/unsavedHeart.png"></img><a href="#save" onClick={props.saveFavorite}><i aria-hidden="true" className="icon-heart-outline"></i> <span>SAVE</span></a>
      </div>
    )
  } else {
    return (
      <div className="tom-saved">
        <img src="../images/savedHeart.png"></img><a href="#save"><span>SAVED</span></a>
      </div>
    )
  }
}

export default SaveOnly;