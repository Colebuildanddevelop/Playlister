import React from "react";
import "../App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class LoginContainer extends React.Component {
  state = {
    form: "Login",
    username: "",
    password: "",
    error: false,
  };

  handleSignUp = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((r) => r.json())
      .then(() => {
        this.handleLogin();
      });
  };

  handleLogin = (e = null) => {
    if (e !== null) e.preventDefault();
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((r) => r.json())
      .then((userInfo) => {
        if (userInfo.error) {
          this.setState({
            error: userInfo.error,
          });
        } else {
          localStorage.token = userInfo.token;
          localStorage.user_id = userInfo.user_id;
          this.props.login();
          this.props.history.push("/");
        }
      });
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  switchForm = () => {
    const newState = this.state.form === "Login" ? "Sign Up" : "Login";
    this.setState({
      form: newState,
      error: false,
    });
  };

  render() {
    return (
      <div className="login">
        <Form>
          <h3>{this.state.form}</h3>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={this.handleInput}
              type="username"
              name="username"
              placeholder="Enter Username"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={this.handleInput}
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          {this.state.form === "Login" ? (
            <div>
              <Button
                onClick={this.handleLogin}
                className="edit-btn"
                style={{ width: "100%" }}
                variant="primary"
                type="submit"
              >
                {this.state.form}
              </Button>
              <Form.Text className="text-muted" onClick={this.switchForm}>
                Don't have an account? Click here to sign up.
              </Form.Text>
            </div>
          ) : (
            <div>
              <Button
                onClick={this.handleSignUp}
                className="edit-btn"
                style={{ width: "100%" }}
                variant="primary"
                type="submit"
              >
                {this.state.form}
              </Button>
              <Form.Text className="text-muted" onClick={this.switchForm}>
                Already have an account? Click here to login.
              </Form.Text>
            </div>
          )}
        </Form>
        {this.state.error ? <p className="error">{this.state.error}</p> : null}
      </div>
    );
  }
}

export default LoginContainer;
