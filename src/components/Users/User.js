import React, { Component } from "react";
import { Link } from "react-router-dom";

export class User extends Component {
  render() {
    const { login, avatar_url, followers } = this.props.user;
    return (
      <div>
        <div className="card">
          <img
            className="card-img-top"
            style={{ maxWidth: "550px" }}
            src={avatar_url}
            alt=""
          />
          <div className="card-body">
            <h4 className="card-title">{login}</h4>
            <p className="card-text-">
              <Link to={"/users/" + login} className="btn btn-dark my-2">
                Show more
              </Link>
              <a
                href={`https://github.com/${login}`}
                className="btn btn-info mx-2"
              >
                repertories
              </a>
              <Link to={`/users/${login}/followers`} className="btn btn-info">
                followers {followers && `(${followers})`}
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
