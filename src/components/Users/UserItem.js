import React, { Component } from "react";
import axios from "axios";
import User from "./User";

class UserItem extends Component {
  state = {
    user: {},
  };

  componentDidMount() {
    const login = this.props.match.params.login;

    axios.get(`https://api.github.com/users/${login}`).then((res) => {
      this.setState({
        user: res.data,
      });
    });
  }

  render() {
    console.log(this.state.user);
    return (
      <div>
        <User user={this.state.user} />
      </div>
    );
  }
}

export default UserItem;
