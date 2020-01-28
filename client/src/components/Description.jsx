import React from 'react';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id : this.props.id,
      bullets : this.props.bullets
    }
  }
  componentDidMount() {
    let bulletVal = this.state.bullets;
    if (this.state.id % 10 === 9) {
      bulletVal.pop();
    }
    this.setState({bullets : bulletVal});
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.bullets.map((description, index) => (
            <li key={index}>{description}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Description;