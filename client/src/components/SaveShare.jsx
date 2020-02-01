import React from 'react';

class SaveShare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved : false
    };
    //this.saveFavorite = this.saveFavorite.bind(this);
  }

  /*
  saveFavorite() {
    this.props.inheritedFunc(this.props.id);
  }
  onClick(e) {
    console.log(`${this.props.id} has been saved to Favorites list.`);
    setState({saved : true});
  }
  */

  render() {
    return (
      <div id="grid-100">
        <div className="tom-grid-50-left">
          <a href="#save" id="left btn btn-secondary btn-large btn-block" onClick={this.props.save} data-product-id={this.props.id} data-product-name={this.props.name}><i aria-hidden="true" className="icon-heart-outline"></i> <span>Save</span></a>
        </div>
        <div className="tom-grid-50-right">
          <a href="#share" type="button" id="tom-share-button" data-toggle="modal"><span>Share</span></a>
          <div className="tom-modal">
            <div className="tom-modal-content">
              <span className="tom-close-btn">&times;</span>
              <p><a href={`https://www.facebook.com/dialog/share?app_id=100208560157973&display=page&href=${this.props.url}&redirect_uri=${this.props.url}`}>Post it</a></p>
              <p><a href={`https://twitter.com/intent/tweet?url=${this.props.url}&text=${this.props.name}`}>Tweet it</a></p>
              <p><a href={`https://pinterest.com/pin/create/button/url=${this.props.url}&media=${this.props.image0}&description=${this.props.name}`}>Pin it</a></p>
              <p><a href={`${this.props.url}`}>Email it</a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SaveShare;