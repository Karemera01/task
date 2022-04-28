import axios from "axios";
import React from "react";

class Signup extends React.Component {
  state = {
    newUser: {
      name: "",
      email: "",
      phoneNo: "",
      username: "",
      password: "",
      passwordConfirm: "",
      userType:""
    }
  };

  onInputChange = event => {
    const copy = { ...this.state.newUser };
    copy[event.target.name] = event.target.value;
    this.setState({ newUser: copy });
  };

  userTypeStatusHandler = event => {
    const copy = {...this.state}
    copy.newUser.userType = event.target.value
    this.setState(copy)
    localStorage.setItem("userType", event.target.value);

  };

  loginButtonClick = e => {
    e.preventDefault();
    if (this.state.newUser.password === this.state.newUser.passwordConfirm) {
      // console.log(this.state.newUser.userType)
      // console.log(localStorage.getItem('userType'))
      axios
      .post("/signup", this.state)
      .then(res => {
        console.log(this.state)
        //get token and save 
        // console.log("line 34 front" + res.data)
         localStorage.setItem('token', res.data)
        
        //route based on user type
        const userType = localStorage.getItem("userType");
        if (userType === "Customer") {
          this.props.history.push("/customer-home");
          localStorage.setItem("userType", "");
        } else if (userType === "Farmer") {
          this.props.history.push("/farmer-home");
          localStorage.setItem("userType", "");
        } else if (userType === "Admin") {
          this.props.history.push("/admin");
          localStorage.setItem("userType", "");
        } else {
          alert("Pick a User Type");
        }
      })
      .catch(err => {
        console.log(err);
      });
    
    } else {
      alert("Passwords dont match, try agian.")
    }
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
            <option >-Select-</option>
            <option value="Farmer">Farmer</option>
            <option value="Customer">Customer</option>
            <option value="Admin">Admin</option>
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
          Email:<input
            name="email"
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
          Password Confirm:<input
            name="passwordConfirm"
            type="text"
            onChange={event => {
              this.onInputChange(event);
            }}
          />
          <button id='signup' onClick={this.loginButtonClick}>Login</button>
        </div>
      </form>
    );
  }
}

export default Signup;
