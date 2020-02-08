/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import SaveOnly from './SaveOnly.jsx';
import ShareOnly from './ShareOnly.jsx';

class SaveShare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false,
    };
    this.saveFavorite = this.saveFavorite.bind(this);
  }

  saveFavorite() {
    // eslint-disable-next-line no-console
    console.log(`Saved ${this.props.name}, with id of ${this.props.id}, or would if we had back-end save functionality.`);
    this.setState({ saved: true });
  }

  render() {
    return (
      <div>
        <div className="tom-grid-100-saveshare">
          <div className="tom-grid-50-left">
            <SaveOnly saved={this.state.saved} saveFavorite={this.saveFavorite} />
          </div>
          <div className="tom-grid-50-right">
            <ShareOnly
              url={this.props.url}
              name={this.props.name}
              share={this.props.share}
              shareClose={this.props.shareClose}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SaveShare;
