import React, { Component } from 'react';


class AddItem extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //
  //   }
  // }


  onSubmit = (e) =>{
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <form className='container' onSubmit={this.onSubmit}>

        <p>
          <label htmlFor="quantity">Quantity</label>
          <input type="text" name="quantity" onChange={this.onChange}/>
        </p>

        <p>
          <label htmlFor="products">Product</label>
          <select name="product" onChange={this.onChange}>
            {this.props.products.map(item => <option key={item.id}>{item.name}</option>)}
          </select>
        </p>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    );
  }
}

export default AddItem;
