/**
 * CostomerHome page of CS568 final project 
 * @ Author: Naha Unborn
 * @ Date: 9/18/2021
 */
import FarmersList from "./FarmersList";
import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
//import Farmer from './Farmer';
// import FarmersList from './FarmersList';

class CustomerHome extends React.Component{
    state ={
        isUserLogin:true
    }

    render(){
        return(
            <React.Fragment>
            <div>
                <h2> {this.props.user.name} Welcome to Fresh Products Whole Food!</h2>
                <p> We provide all Fresh Local Products</p>
            </div>

            <BrowserRouter>
            <Link to = 'cart'> Cart</Link>
            <Link to = 'orders'> Orders</Link>
            <Link to = 'signout'> Sign Out</Link>
            <Link to = 'farmersList'> Click to Show All Farmers</Link>
             <Route path = '/farmerslist' component = { FarmersList}/>
             {/* <Route path = '/orders' component = {Orders}/>
             <Route path = '/cart' component = { Cart}/>
             <Route path = '/signout' component = { SignIn}/> */}
            </BrowserRouter>

        </React.Fragment>
        )
    }
}


export default CustomerHome;