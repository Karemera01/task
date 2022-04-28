/**
 * CS568 final project 
 * @ Author: Naha Unborn
 * @ Date: 9/18/2021
 */

import React from "react";
import axios from "axios";
import Product from './Product';
import Customer from "./Customer";
import uuidv4 from "uuid/v4"
import { Route } from "react-router";
import CheckOut from "./CheckOut";


class Cart extends React.Component {
    state = {
        cart: [],
        newOrder: {
            orderId: '',
            products: [],
            totalPrice: 0,
            orderDate: ''
        }
    }

    componentDidMount() {
        axios.get('customerslist/:id/cart', { headers: { Authorization: localStorage.getItem('token') } })
            .then(res => {
                let copy = { ...this.state };
                copy.cart = res.data;
                this.state(copy);
            })
    }

    removeFromCart = (id) => {
        let copy = { ...this.state }
        copy.cart = copy.cart.filter(item => item.id !== id);
        this.setState(copy)
        return
    }

    placeOrder = () => {
        let copy = { ...this.state };
        let orderCopy = { ...copy.newOrder };
        orderCopy.products = coyp.cart;
        orderCopy.orderDate = new Date();
        orderCopy.totalPrice = copy.cart.reduce((sum, item) => { sum + item.price }, 0);
        orderCopy.id = uuidv4();
        this.setState(copy);
        axios.post('./customerslist/:id/orders', this.state.newOrder)
        .then(res=> alert('Order was placed successfully!'))
          .catch( err => alert(err));
        alert('Thanks trillions for your business! We are always happy to bring the best fresh products to our customers. ')
    }

    render() {
        return (
            <div>
                {
                    this.state.cart.map(item => {
                        { item }
                        <input
                            type='button'
                            value="Remove from Cart"
                            onClick={() => this.removeFromCart(item.id)}
                        />
                    })
                }
                <input
                    type="button"
                    value='Place Order'
                    onClick={this.placeOrder}
                />
                <li> 
                <Link to ='/checkout'> Pay/Checkout</Link>
                </li>
                <Route path = '/checkout' component ={CheckOut}/>
            </div>
        )
    }

}


export default Cart;