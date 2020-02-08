/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const ShareOnly = ({
  image0, name, share, shareClose, url,
}) => (
  <div className="tom-share-only">
    <div>
      <img src="../images/Share.png" className="tom-share-button" alt="Share Button" />
      <a
        href="#share"
        className="tom-share-text"
        onClick={share}
      >
        <i aria-hidden="true" className="icon-heart-outline" />
        <span>SHARE</span>
      </a>
    </div>
    <div className="tom-modal-share" id="tom-modal-share">
      <div className="tom-modal-share-content">
        <span className="tom-share-close-btn" onClick={shareClose}>&times;</span>
        <h4 className="tom-modal-share-title">Share with a friend</h4>
        <ul className="tom-modal-share-list">
          <li className="tom-modal-share-item"><a href={`https://www.facebook.com/dialog/share?app_id=100208560157973&display=page&href=${url}&redirect_uri=${url}`}>Post it</a></li>
          <hr />
          <li className="tom-modal-share-item"><a href={`https://twitter.com/intent/tweet?url=${url}&text=${name}`}>Tweet it</a></li>
          <hr />
          <li className="tom-modal-share-item"><a href={`https://pinterest.com/pin/create/button/url=${url}&media=${image0}&description=${name}`}>Pin it</a></li>
          <hr />
          <li className="tom-modal-share-item"><a href={`${url}`}>Email it</a></li>
        </ul>
      </div>
    </div>
  </div>
);

export default ShareOnly;
