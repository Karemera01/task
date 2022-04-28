import React from "react";
import axios from 'axios'
import CustomersList from './CustomersList'
class Admin extends React.Component {
  state = {
    farmer: {
      name: "",
      phoneNo: "",
      username: "",
      password: "",
      userType: ""
    },
    customer: {
      name: "",
      phoneNo: "",
      username: "",
      password: "",
      userType: ""
    },
    transactions: {},
    activated:{},
    deactivated:{}
  };

  userTypeStatusHandler = event => {
  if(event.target.value === 'Farmer'){
    //make a call to get all farmer accounts
    localStorage.setItem("userType", event.target.value);
    axios.get('/farmers-list').then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  } else {
    if(event.target.value === 'Customer'){
      //make a call to get all farmer accounts
      localStorage.setItem("userType", event.target.value);
      axios.get('/customer-list').then((res)=>{
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
    //make a call to get all customer accounts
  }

  }
}

  userChangeAccountActivityState=()=>{

  }

  listAllTransactions=()=>{
    
  }

  reset = e => {
    e.preventDefault();
    console.log("reset");
  };

  render() {
    return (
      <form>
        <div className="select">
          Pick User Type:{" "}
          <select
            onChange={event => {
              this.userTypeStatusHandler(event);
            }}
            name="user-type"
            className="filter-user-type"
          >
            <option>Select</option>
            <option value="Farmer">Farmer</option>
            <option value="Customer">Customer</option>
          </select>
        </div>
        <br />
        <div>
          Name::<input
            name="name"
            type="text"
            onChange={event => {
              this.onInputChange(event);
            }}
          />
          Phone Number:<input
            name="phoneNo"
            type="text"
            onChange={event => {
              this.onInputChange(event);
            }}
          />
          Username:<input
            name="username"
            type="text"
            onChange={event => {
              this.onInputChange(event);
            }}
          />
          Password:<input
            name="password"
            type="text"
            onChange={event => {
              this.onInputChange(event);
            }}
          />
          New Username:<input
            name="newUsername"
            type="text"
            onChange={event => {
              this.onInputChange(event);
            }}
          />
          New Password:<input
            name="newPassword"
            type="text"
            onChange={event => {
              this.onInputChange(event);
            }}
          />
          <button onClick={this.loginButtonClick}>Login</button>
          <button onClick={this.reset}>Reset</button>
          <div className="account-display">
            {/* get the customers list or farmers list components and display here */}
          </div>
        </div>
      </form>
    );
  }
}

export default Admin;
