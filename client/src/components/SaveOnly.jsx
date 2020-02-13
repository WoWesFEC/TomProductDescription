/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';

const SaveOnly = function SaveFunc({ saved, saveFavorite }) {
  if (saved === false) {
    return (
      <div className="tom-unsaved">
        <div>
          <img src="../images/unsavedHeart.png" className="tom-heart" alt="Clear Unsaved Heart" />
          <a href="#save" className="tom-save-text" onClick={saveFavorite}>
            <i aria-hidden="true" className="icon-heart-outline" />
            {' '}
            <span>SAVE</span>
          </a>
        </div>
      </div>
    );
  }
  return (
    <div className="tom-saved">
      <img src="../images/savedHeart.png" className="tom-heart" alt="Red Saved Heart" />
      <a href="#save" className="tom-save-text"><span>SAVED</span></a>
    </div>
  );
};

export default SaveOnly;
