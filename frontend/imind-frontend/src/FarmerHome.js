import FarmersList from "./FarmersList";
import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

class FarmerHome extends React.Component {
  state = {
    isUserLogin: true
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <h2> Welcome to Fresh Products Whole Food!</h2>
          <p> We provide all Fresh Local Products</p>
        </div>

        <BrowserRouter>
          <h2>Your Products:</h2>
          <FarmersList />
          {/* <Route path = '/farmers-list' component = { FarmersList}/>  */}
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default FarmerHome;
