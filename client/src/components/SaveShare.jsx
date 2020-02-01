import React from 'react';
import SaveOnly from './SaveOnly.jsx';

class SaveShare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved : false
    };
    this.saveFavorite = this.saveFavorite.bind(this);
  }

  
  saveFavorite() {
    console.log(`Saved ${this.props.name}, with id of ${this.props.id}, or would if we had back-end save functionality.`);
    this.setState({saved : true});
  }

  /*
  onClick(e) {
    console.log(`${this.props.id} has been saved to Favorites list.`);
    setState({saved : true});
  }
  */

  render() {
    return (
      <div id="grid-100">
        <div className="tom-grid-50-left">
          <SaveOnly saved={this.state.saved} saveFavorite={this.saveFavorite} />
        </div>
        <div className="tom-grid-50-right">
          <a href="#share" type="button" id="tom-share-button" onClick={this.props.share} data-toggle="modal"><span>SHARE</span></a>
          <div className="tom-modal-share">
            <div className="tom-modal-share-content">
              <span className="tom-share-close-btn">&times;</span>
              <h4 className="tom-modal-share-title">Share with a friend</h4>
              <ul>
                <li className="tom-modal-share-item"><a href={`https://www.facebook.com/dialog/share?app_id=100208560157973&display=page&href=${this.props.url}&redirect_uri=${this.props.url}`}>Post it</a></li>
                <li className="tom-modal-share-item"><a href={`https://twitter.com/intent/tweet?url=${this.props.url}&text=${this.props.name}`}>Tweet it</a></li>
                <li className="tom-modal-share-item"><a href={`https://pinterest.com/pin/create/button/url=${this.props.url}&media=${this.props.image0}&description=${this.props.name}`}>Pin it</a></li>
                <li className="tom-modal-share-item"><a href={`${this.props.url}`}>Email it</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SaveShare;