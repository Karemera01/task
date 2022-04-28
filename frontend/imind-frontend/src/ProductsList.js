import React, { Component } from "react";
import Product from "./Product";
import axios from "axios";

class ProductsList extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    //CONNORS note
    //may need to get rid of token as this comp. will be rendered upon entering homepage before login/signup
    console.log(localStorage.getItem("token"));
    axios
      .get("/products", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((response) => {
        let copy = { ...this.state };
        copy.products = response.data;
        this.setState(copy);
      });
  }
  updateProduct = (id) => {
    this.props.history.push("/update-product" + id);
  };
  deleteProduct = (id) => {
    let result = this.state.products.filter((item) => {
      return id !== item.id;
    });
    this.setState({ products: result });
  };
  render() {
    return this.state.products.map((item) => {
      return (
        <Product
          key={item.id}
          name={item.name}
          price={item.price}
          description={item.description}
          quantity={item.quantity}
          farmer={item.farmer}
          updateProduct={() => {
            this.updateProduct(item.id);
          }}
          deleteProduct={()=>{
            this.deleteProduct(item.id)
          }}
        ></Product>
      );
    });
  }
}

export default ProductsList;
