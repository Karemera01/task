import Login from "./Login";
import Signup from "./Signup";
import Header from "./Header";
import Admin from "./Admin";
import CustomerHome from "./CustomerHome";
import FarmerHome from './FarmerHome'
import "./App.css";
import ProductsList from "./ProductsList";
import FarmersList from "./FarmersList";
import UpdateProduct from "./UpdateProduct";
import React from 'react';
import {
  withRouter,
  BrowserRouter,
  Link,
  Route,
  Switch
} from "react-router-dom";

// export const myContext = React.createContext()

class App extends React.Component {

  state = {products:[]}
  componentDidMount = () => {
    //not sure if i need to make a call, 
    //ProductsList comp should automatically be rendered upon entering homepage
    
    // axios
    //   .get("/products")
    //   .then(res => {
    //     console.log(res);

    //     const copy = {...this.state}
    //     copy.products = res.data
    //     this.setState(copy)
    //   })
    //   .catch(err => {});
    //make a call to server and fetch all prdocuts and display them
  };

  render() {
    return (
      <BrowserRouter>
        <Header />
        {/* <myContext.Provider value={this.state}> */}
        <div className="App">
          <Switch>
            <Route exact path="/login" component={withRouter(Login)} />
            <Route exact path="/signup" component={withRouter(Signup)}>
              {/* withRouter passes history object to child comp. Admin */}
            </Route>
            <Route path="/admin" component={withRouter(Admin)} />
            <Route exact path="/customer-home" component={CustomerHome} />
            <Route exact path="/products" component={ProductsList} />
            <Route exact path="/farmers-list" component={FarmersList} />
            <Route exact path="/update-product" component={UpdateProduct} />
            <Route exact path="/farmer-home" component={FarmerHome}/>
          </Switch>

          <div className="display-products">
            <ProductsList />
          </div>
        </div>
        {/* </myContext.Provider> */}
      </BrowserRouter>
    );
  }
}

export default App;
