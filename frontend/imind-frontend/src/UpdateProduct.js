import React, { Component } from "react";
import axios from "axios";
class UpdateProduct extends Component {
  state = {
    product: {
      name: "",
      price: 0,
      description:"",
      quantity: 0,
      farmer: ""
    },
  };
  componentDidMount() {
    axios
      .get("/products/" + this.props.match.params.id+ "/details", {
        headers: { authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        let copy = { ...this.state };
        copy.product = res.data;
        this.setState(copy);
      });
  }
  apply=()=>{
      //axios.put('/products')
  }
  

  onChange = (event) => {
    let copy = { ...this.state.product };
    copy[event.target.name] = event.target.value;
    this.setState({ product: copy });
  };
  render() {
    return (
      <div>
        <h2>Update Product</h2>
        Name:
        <input
          type="text"
          value={this.state.product.name}
          name="name"
          onChange={(event) => {
            this.onChange(event);
          }}
        />
        Price:
        <input
          type="text"
          value={this.state.product.price}
          name="price"
          onChange={(event) => {
            this.onChange(event);
          }}
        />
        Description:
        <input
          type="text"
          value={this.state.product.description}
          name="description"
          onChange={(event) => {
            this.onChange(event);
          }}
        />
        Quantity:
        <input
          type="text"
          value={this.state.product.quantity}
          name="quantity"
          onChange={(event) => {
            this.onChange(event);
          }}
        />
        farmer:
        <input
          type="text"
          value={this.state.product.farmer}
          name="farmer"
          onChange={(event) => {
            this.onChange(event);
          }}
        />
        <input type="button" value="Apply" onClick={this.apply} />
      </div>
    );
  }
}

export default UpdateProduct;
