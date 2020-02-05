import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Description from './components/Description.jsx';
import Pricing from './components/Pricing.jsx';
import LowStock from './components/LowStock.jsx';
import OtherStoresModal from './components/OtherStoresModal.jsx';
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
      productId : 65,
      descriptions : ['this is really useful', 'you should buy this', 'buy extra for your friends, if you have some']
    };
    this.clickSave = this.clickSave.bind(this);
    this.clickShare = this.clickShare.bind(this);
    this.clickStores = this.clickStores.bind(this);
    this.clickStoresClose = this.clickStoresClose.bind(this);
    this.getNewProductId = this.getNewProductId.bind(this);
  }

  componentDidMount() {
    axios.get('/items', {
      params : {
        ID : this.state.productId
      }
    })
    .then((result) => {
      this.setState({
        price : result.data[0].price.toFixed(2) || 3.98,
        name : result.data[0].name || 'Bob the Dinosaur'
      })
    })
    .catch(function(error) {
      console.log(error)
    });
    /* WROTE THIS FOR EVENT TESTING PURPOSES
    window.addEventListener('tomCart', (event) => {
      console.log('event heard')
      this.checkForEvent(event)
    })
    */
    window.addEventListener('jordanAwesome', this.getNewProductId);
  }

  /* WROTE THIS FOR EVENT TESTING PURPOSES
  checkForEvent(e) {
    console.log('detected an event');
    console.log('finding the right value', e.detail);
    //this.setState({productId : this.state.productId++})
    //console.log(this.state.productId);
  */

  getNewProductId(e) {
    console.log('e.dtail', e.detail);
    this.setState({productId : e.detail});
    axios.get('/items', {
      params : {
        ID : e.detail
      }
    })
    .then((result) => {
      this.setState({
        price : result.data[0].price.toFixed(2) || 3.98,
        name : result.data[0].name || 'Bob the Dinosaur'
      })
    })
    .catch(function(error) {
      console.log(error)
    });
  }

  clickSave() {
    console.log(`Saved ${this.state.name}, with id of ${this.state.productId}, or would if we had back-end save functionality.`);
  }

  clickShare() {
    console.log('Tried to share');
    document.getElementById('tom-modal-share').style.display = 'block';
  }

  clickShareClose() {
    console.log('Tried to close share');
    document.getElementById('tom-modal-share').style.display = 'none';
  }
  
  clickStores() {
    console.log('Tried to display other stores');
    document.getElementById('tom-modal-stores').style.display = 'block';
  }

  clickStoresClose() {
    console.log('Tried to close other stores');
    document.getElementById('tom-modal-stores').style.display = 'none';
  }

  render() {
    return (
      <div className="tom-component">
        <Pricing price={this.state.price} id={this.state.productId} />
        <LowStock id={this.state.productId} />
        <Description id={this.state.productId} bullets={this.state.descriptions} />
        <Warranty id={this.state.productId} />
        <ShoppingCart name={this.state.name} price={this.state.price}/>
        <SaveShare url="http://www.google.com" image0="https://pbs.twimg.com/profile_banners/98042827/1528588486/1080x360" save={this.clickSave} share={this.clickShare} shareClose={this.clickShareClose} id={this.state.productId} name={this.state.name}/>
        <div>
          <div className="tom-grid-100">
            <StoreAvailability id={this.state.productId} stores={this.clickStores} storesClose={this.clickStoresClose} />
            <ShipAvailability price={this.state.price} id={this.state.productId}/>
          </div>
        <OtherStoresModal close={this.clickStoresClose} stores={this.clickStores} id={this.state.productId}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("tom"));