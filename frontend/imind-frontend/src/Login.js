import React from "react";
import axios from "axios";

class Login extends React.Component {
  state = { user: { username: "", password: "" }, userType: [] };
  // componentDidMount=()=>{

  // }

  onInputChange = event => {
    const copy = { ...this.state.user };
    copy[event.target.name] = event.target.value;
    this.setState({ user: copy });
  };

 
  
   userTypeStatusHandler=(event)=>{
     localStorage.setItem('userType', event.target.value)
  }


    
  loginButtonClick = e => {
    e.preventDefault();
    const copy = {...this.state};
    copy.userType.push(localStorage.getItem("userType"))
    this.setState(copy);
    axios
      .post("/login", this.state)
      .then(res => {
        //get token and save 
        // console.log("line 33 frontend")
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
          console.log("here")
          this.props.history.push("/admin");
          localStorage.setItem("userType", "");
        } else {
          alert("Pick a User Type");
          // this.props.history('/login')
        }
      })
      .catch(err => {
        console.log(err);
      });
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
            <option>-Select-</option>
            <option value="Farmer">Farmer</option>
            <option value="Customer">Customer</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <br />
        <div>
          Username<input
            name="username"
            type="text"
            onChange={event => {
              this.onInputChange(event);
            }}
          />
          Password<input
            name="password"
            type="text"
            onChange={event => {
              this.onInputChange(event);
            }}
          />
          <button id='login' onClick={this.loginButtonClick}>Login</button>
        </div>
      </form>
    );
  }
}

export default Login;
