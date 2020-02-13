/* eslint-disable linebreak-style */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

class Description extends React.Component {
  constructor({ id, bullets }) {
    super();
    this.state = {
      id,
      bullets,
    };
  }

  componentDidMount() {
    const bulletVal = this.state.bullets;
    if (this.state.id % 10 === 9) {
      bulletVal.pop();
    }
    this.setState({ bullets: bulletVal });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.bullets.map((description) => (
            <li className="tom-bullet" key={description}>{description}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Description;
