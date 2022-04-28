/**
 * CS568 final project 
 * @ Author: Naha Unborn
 * @ Date: 9/18/2021
 */

import React from "react";
import { Route } from "react-router";


class Order extends React.Component{

    
    render(){
        return(
            <div className='order'>
                <p>{this.props.orderId} </p>
                <p> {this.props.products} </p>
                <p>{this.props.totalPrice} </p>
                <p> {this.props.orderDate} </p>
                <p> {this.props.status} </p>
                
         if(this.props.status === 'complete'){
                        <p> <Link to = 'feedback'> Feedback and Rating </Link> </p>
                    }
               
                <p> <Link to = 'customerhome'> Back tonmy Home page</Link> </p>
                <Route path = 'feedback' component = {Feedback}/>
                <Route path = 'customerhome' component = {CustomerHome}/>
            </div>
        )
    }
}

export default Order;
