/**
 * CS568 final project 
 * @ Author: Naha Unborn
 * @ Date: 9/18/2021
 */


import React from "react";

class Customer extends React.Component{
    state = {
        active:true,
        orders:[]
    }
    render(){
        return(
            <div>
                <p> {this.props.name}</p>
                <p> {this.props.email} </p>
                <p> {this.props.phone}</p>
                <p> {this.state} </p>
            </div>
        )
    }

}


export default Customer;