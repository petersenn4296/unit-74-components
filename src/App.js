import React, { Component } from 'react';
import CartHeader from './cartHeader'
import CartFooter from './cartFooter'
import CartItems from './cartItems'
import CartItem from './cartItem'
import AddItem from './addItem'

const cartItemsList = [
  { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
  { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
  { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
]

const products = [
  { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
  { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
  { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
  { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
  { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
  { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
  { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
  { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
  { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
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
    
    let newItem = {
            product: {
                id: oneItem.id,
                name: oneItem.name,
                priceInCents: oneItem.priceInCents
              },
            quantity: oneCartItem.quantity
          }
          this.setState({
            cartItems: [...this.state.cartItems, newItem]
          })
  }


  render() {
    return (
      <div className="App">
        <CartHeader/>
        <CartItems
          list={this.state.cartItems}
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
