import React from 'react';
import axios from 'axios';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    let quantity = e.target.value;
    axios.post('/3002', {quantity: quantity})
    .then(() => {
      console.log('Posted to shopping cart');
    })
    .catch((error) => {
      console.log(error);
    })
  }
  
  render() {
    return (
      <div>
        This will be the shopping cart. <br />
        Quantity Minus - Quantity 1 (can it be 0?) - Quantity Plus
        <div>
          <div>
            <a aria-label="Decrease Quantity by 1" data-stepper-role="decrease" data-stepper-target="#quantity" href="#" id="btn btn-secondary js-stepper-control disabled"><i aria-hidden="true" id="icon-minus"></i></a>
            <input aria-describedby="product-qty-stepper-aria-describedby" name="quantity" aria-label="quantity" data-toggle="stepper" data-round="up" id="quatity form-control stepper js-quantity" pattern="[0-9]*" type="tel" data-min="1" data-max="9999" data-step="1" defaultValue="1"></input>
            <a aria-label="Increase Quantity by 1" data-stepper-role="increase" data-stepper-target="#quantity" href="#" id="btn btn-secondary js-stepper-control"><i aria-hidden="true" id="icon-plus"></i></a>
          </div>
        </div>
        Add to Cart Button-Post to 3001 (Jordan's cart component)
        <div id="pd-add-cart grid-60 tablet-grid-50 v-spacing-medium hide-print">
          <input data-productname={this.props.name} data-productprice={this.props.price}></input>
          <button type="submit" id="btn btn-add btn-large btn-block pd-add-cart-button ">Add To Cart</button>
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