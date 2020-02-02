import React from 'react';

const ShareOnly = (props) => (
  <div className="tom-share-only">
    <img src="../images/Share.png"></img><a href="#share" type="button" id="tom-share-button" onClick={props.share}><span>SHARE</span></a>
    <div className="tom-modal-share" id="tom-modal-share">
      <div className="tom-modal-share-content">
        <span className="tom-share-close-btn" onClick={props.shareClose}>&times;</span>
        <h4 className="tom-modal-share-title">Share with a friend</h4>
        <ul className="tom-modal-share-list">
          <li className="tom-modal-share-item"><a href={`https://www.facebook.com/dialog/share?app_id=100208560157973&display=page&href=${props.url}&redirect_uri=${props.url}`}>Post it</a></li>
          <hr></hr>
          <li className="tom-modal-share-item"><a href={`https://twitter.com/intent/tweet?url=${props.url}&text=${props.name}`}>Tweet it</a></li>
          <hr></hr>
          <li className="tom-modal-share-item"><a href={`https://pinterest.com/pin/create/button/url=${props.url}&media=${props.image0}&description=${props.name}`}>Pin it</a></li>
          <hr></hr>
          <li className="tom-modal-share-item"><a href={`${props.url}`}>Email it</a></li>
        </ul>
      </div>
    </div>
  </div>
)

export default ShareOnly;