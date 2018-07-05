import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    return (
      <div class="list-group-item">
        <div class="row">
          <div className="col-md-8 product">{this.props.product.name}</div>
          <div className="col-md-2 price">{this.props.product.priceInCents}</div>
          <div className="col-md-2 quantity">{this.props.quantity}</div>
        </div>
      </div>
    );
  }
}

export default CartItem;
