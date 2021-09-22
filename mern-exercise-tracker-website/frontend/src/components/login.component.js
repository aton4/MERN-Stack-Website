import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit(e) {
    e.preventDefault();

    const login = new Login({
      username: e.target[0].value,
      password: e.target[1].value,
    });

    console.log("---start log in--->");

    axios
      .post("http://localhost:50001/login", login)
      .then((response) => {
        const temp = response.data;
        console.log(temp);
      })
      .catch((err) => console.log("err: " + err));

    console.log("<---end login---");
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <br />
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <input type="submit" value="Log In" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
