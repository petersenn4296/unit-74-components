import React, { Component } from 'react';
import CartHeader from './cartHeader'
import CartFooter from './cartFooter'
import CartItems from './cartItems'
import CartItem from './cartItem'
import AddItem from './addItem'
import Total from './total'

const cartItemsList = [
  { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
  { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
  { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
]

const products = [
  { id: 40, name: 'Mediocre Iron Watch', priceInCents: 3.99 },
  { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 4.99 },
  { id: 42, name: 'Intelligent Paper Knife', priceInCents: 19.99 },
  { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 25.00 },
  { id: 44, name: 'Practical Copper Plate', priceInCents: 10.00 },
  { id: 45, name: 'Awesome Bronze Pants', priceInCents: 3.99 },
  { id: 46, name: 'Intelligent Leather Clock', priceInCents: 29.99 },
  { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 400.00 },
  { id: 48, name: 'Awesome Leather Shoes', priceInCents: 39.90 },
]

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list: cartItemsList,
      products: products,
      cartItems: [],
      quantity: 0,
      name: '',
      total: 0
    }
  }

  handleSubmit = (oneCartItem) => {
    const oneItem = this.state.products.filter(item => item.name === oneCartItem.product)[0]
    const checkExist = this.state.cartItems.filter(item => item.product.name === oneItem.name)
    let qty = parseInt(oneCartItem.quantity)
    let price = oneItem.priceInCents

    if(checkExist.length === 1) {
      let mom = parseInt(checkExist[0].quantity, 10) + parseInt(oneCartItem.quantity, 10)
      checkExist[0].quantity = mom
      this.setState({
        cartItems: this.state.cartItems,
        total: qty * price + this.state.total
      })
    } else {
        let newItem = {
            product: {
                id: oneItem.id,
                name: oneItem.name,
                priceInCents: oneItem.priceInCents
              },
            quantity: oneCartItem.quantity
          }
          this.setState({
            cartItems: [...this.state.cartItems, newItem],
            total: qty * price + this.state.total
          })
        }
  }


  render() {
    return (
      <div className="App">
        <CartHeader/>
        <CartItems
          list={this.state.cartItems}
        />
        <Total
          list={this.state.cartItems}
          total={this.state.total}
        />
        <AddItem
          products={products}
          onSubmit={this.onSubmit}
          handleSubmit={this.handleSubmit}
        />
        <CartFooter copyright="2018"/>
      </div>
    );
  }
}

export default App;
