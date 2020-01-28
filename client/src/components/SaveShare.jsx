import React from 'react';

class SaveShare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    //this.saveFavorite = this.saveFavorite.bind(this);
  }

  /*
  saveFavorite() {
    this.props.inheritedFunc(this.props.id);
  }
  */

  render() {
    return (
      <div id="grid-100">
        <div id="grid-50-left">
          <a href="#save" id="left btn btn-secondary btn-large btn-block" data-product-id={this.props.id} data-product-name={this.props.name}><i aria-hidden="true" className="icon-heart-outline"></i> <span>Save</span></a>
        </div>
        <div id="grid-50-right">
          <a href="#share" type="button" id="right btn btn-secondary btn-large btn-block" data-toggle="modal"><i aria-hidden="true" className="icon-link"></i> <span>Share</span></a>
        </div>
      </div>
    )
  }
}

export default SaveShare;