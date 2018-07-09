import React, { Component } from 'react';

class Total extends Component {


getTotal = (e) => {
  return e
}

  render() {
    // console.log(this.props.list);
    return (
      <div className='container'>
        <hr/>
        <div>
          Total Price: {this.props.total}
        </div>
        <hr/>
      </div>
    );
  }
}

export default Total;
