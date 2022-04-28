import React from "react";
import { withRouter } from "react-router-dom";
class Header extends React.Component {

  handleClickLogin=()=>{
this.props.history.push('/login')
}

handleClickSignup=()=>{
    this.props.history.push('/signup')

  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClickLogin}>Login</button>
        <button onClick={this.handleClickSignup}> Signup</button>

      </div>
    );
  }
}

export default withRouter(Header);
