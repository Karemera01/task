/**
 * CS568 final project 
 * @ Author: Naha Unborn
 * @ Date: 9/18/2021
 */

 import React from "react";
 import { Route } from "react-router";
 import Order from './Order';
import axios from "axios";
class OrderList extends React.Component{
    state = {
        orders: []
    }

    componentDidMount(){
        axios.get('/orderslist', {headers:{Authorization: localStorage.getItem('token')}})
        .then(res=>{
            let copy = {...this.state};
            copy.orders = res.data;
            this.setState(copy);
        })
    }
    render(){
        return(
            <div>
{ this.state.orders.map(item=>{
    <Order 
    orderId = {item.orderId}
    products = {item.products}
    totalPrice ={item.totalPrice}
    orderDate ={item.orderDate}
    Status = {item.status} />
})
}
            </div>
        )
    }
}