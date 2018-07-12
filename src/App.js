import React, { Component } from 'react';
import CartHeader from './cartHeader'
import CartFooter from './cartFooter'
import CartItems from './cartItems'
import CartItem from './cartItem'
import AddItem from './addItem'
import Total from './total'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list: [],
      products: [],
      cartItems: [],
      quantity: 0,
      name: '',
      total: 0
    }
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/products')
    const json = await response.json()
    this.setState({products: json})
  }


  handleSubmit = (oneCartItem) => {
    const oneItem = this.state.products.filter(item => item.name === oneCartItem.product)[0]
    const existingItem = this.state.cartItems.filter(item => item.product.name === oneItem.name)
    let qty = parseInt(oneCartItem.quantity)
    let price = oneItem.priceInCents

    if(existingItem.length === 1) {
      let totalPrice = parseInt(existingItem[0].quantity, 10) + parseInt(oneCartItem.quantity, 10)
      existingItem[0].quantity = totalPrice
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
          products={this.state.products}
          onSubmit={this.onSubmit}
          handleSubmit={this.handleSubmit}
        />
        <CartFooter copyright="2018"/>
      </div>
    );
  }
}

export default App;
