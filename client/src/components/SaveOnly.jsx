import React from 'react';

const SaveOnly = function(props) {
  if (props.saved === false) {
    return (
      <div className="tom-unsaved">
        <div><img src="../images/unsavedHeart.png" className="tom-heart"></img><a href="#save" className="tom-save-text" onClick={props.saveFavorite}><i aria-hidden="true" className="icon-heart-outline"></i> <span>SAVE</span></a></div>
      </div>
    )
  } else {
    return (
      <div className="tom-saved">
        <img src="../images/savedHeart.png" className="tom-heart"></img><a href="#save" className="tom-save-text"><span>SAVED</span></a>
      </div>
    )
  }
}

export default SaveOnly;