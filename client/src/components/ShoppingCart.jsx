import React from 'react';
import axios from 'axios';

class ShoppingCart extends React.Component {
  
  /*
  setNativeValue(element, value) {
    const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
    const prototype = Object.getPrototypeOf(element);
    const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;

    if (valueSetter && valueSetter !== prototypeValueSetter) {
      prototypeValueSetter.call(element, value);
    } else {
      valueSetter.call(element, value);
    }
  }
  */

  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    }
    this.addToCart = this.addToCart.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addToCart(e) {
    e.preventDefault();
    let quantity = this.state.quantity;
    console.log('posting a request to shopping cart for quantity', quantity);
    axios.post('http://127.0.0.1:3001/shoppingCart', {quantity : quantity})
    .then(() => {
      console.log('Posted to shopping cart');
    })
    .catch((error) => {
      console.log(error);
    })
  }

  handleChange(e) {
    this.setState({quantity : e.target.value});
  }

  increaseQuantity(e) {
    e.preventDefault();
    let currentQuantity = this.state.quantity;
    let newQuantity = currentQuantity+1;
    this.setState({ quantity : newQuantity});
  }

  decreaseQuantity(e) {
    e.preventDefault();
    let currentQuantity = this.state.quantity;
    if (currentQuantity > 1) {
      this.setState({quantity: currentQuantity-1});
    }
  }
  
  render() {
    return (
      <div>
        <div className="tom-cart-buttons">
          <div className="tom-cart-button-group">
            <button type="button" className="tom-cart-adjuster" onClick={this.decreaseQuantity}><i>-</i></button>
            <input id="tom-cart-value" className="tom-cart-quantity" value={this.state.quantity} onChange={this.handleChange}></input>
            <button type="button" className="tom-cart-adjuster" onClick={this.increaseQuantity}><i aria-hidden="true" id="icon-plus">+</i></button>
          </div>
        </div>
        <div className="tom-cart">
          <button type="submit" className="tom-cart-submit" onClick={this.addToCart}>Add To Cart</button>
        </div>

      </div>
    )
  }
}

/*
        <div>
          <div>
            <a aria-label="Decrease Quantity by 1" data-stepper-role="decrease" data-stepper-target="#quantity" href="#" id="btn btn-secondary js-stepper-control disabled"><i aria-hidden="true" id="icon-minus"></i></a>
            <input aria-describedby="product-qty-stepper-aria-describedby" name="quantity" aria-label="quantity" data-toggle="stepper" data-round="up" id="quatity form-control stepper js-quantity" pattern="[0-9]*" type="tel" data-min="1" data-max="9999" data-step="1" value="1"></input>
            <a aria-label="Increase Quantity by 1" data-stepper-role="increase" data-stepper-target="#quantity" href="#" id="btn btn-secondary js-stepper-control"><i aria-hidden="true" id="icon-plus"></i></a>
          </div>
        </div>


<form class="js-add-to-cart-form" id="add-to-cart-form" method="POST" action="javascript:void(0);" data-viewsize="large" data-redirecturl="">
  <hr class="v-spacing-large" />
   <div class="pd-quantity met-product-quantity grid-40 tablet-grid-50 v-spacing-medium hide-print">

    </div>

    <div class="pd-add-cart grid-60 tablet-grid-50 v-spacing-medium hide-print">
    <!-- @TODO - add hidden fields for form to submit to backend when javascript fails -->
    <input type="hidden" name="productId" value="3745561" data-productname="Build and GrowKid&#x27;s Phillips Head Screwdriver Set" data-productimagesrc="//mobileimages.lowes.com/product/converted/820909/820909627036xl.jpg" data-productprice="3.98" />
    <button type="submit"  class="btn btn-add btn-large btn-block pd-add-cart-button ">Add To Cart</button>
    </div>
*/

export default ShoppingCart;