/**
 * CS568 final project 
 * @ Author: Naha Unborn
 * @ Date: 9/18/2021
 */

import React from "react";
import { BrowserRouter,Link, Route } from "react-router-dom";
import axios from 'axios';
import Customer from "./Customer";


class CustomersList extends React.Component{
    state = {
        customersLsit: []
    }

    componentDidMount(){
        axios.get('/customer-list')
        .then(res=>{
            let copy = {...this.state};
            copy.customersLsit = res.data;
            this.setState(copy);
        })
    }

    render(){
        return(
                this.this.state.customerslist.map((item)=>{
                    return <Customer
                    name = {item.name}
                    email = {item.email}
                    phone ={item.phone}>
                        </Customer>
                } 
                )
        )
    }
}

export default CustomersList;