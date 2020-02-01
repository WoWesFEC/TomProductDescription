import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Description from './components/Description.jsx';
import Pricing from './components/Pricing.jsx';
import SaveShare from './components/SaveShare.jsx';
import ShipAvailability from './components/ShipAvailability.jsx';
import ShoppingCart from './components/ShoppingCart.jsx';
import StoreAvailability from './components/StoreAvailability.jsx';
import Warranty from './components/Warranty.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dogs : ['fluffy', 'spot', 'fido'],
      price : 3.98,
      name : 'Bob the Dinosaur',
      productId : 57,
      descriptions : ['this is really useful', 'you should buy this', 'buy extra for your friends, if you have some']
    };
    this.clickSave = this.clickSave.bind(this);
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:3002/dogs')
    .then((result) => {
      console.log('got a response')
      this.setState({dogs : result.data})
    })
  }

  clickSave(e) {
    console.log(`Saved ${this.state.name}, with id of ${this.state.productId}, or would if we had back-end save functionality.`);
  }

  render() {
    return (
      <div>
        <Pricing price={this.state.price} id={this.state.productId} />
        <Description id={this.state.productId} bullets={this.state.descriptions} />
        <Warranty id={this.state.productId} />
        <ShoppingCart name={this.state.name} price={this.state.price}/>
        <SaveShare save={this.clickSave} id={this.state.productId} name={this.state.name}/>
        <StoreAvailability id={this.state.productId}/>
        <ShipAvailability id={this.state.productId}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));