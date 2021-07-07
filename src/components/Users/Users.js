import React from "react";
import User from "./User";

function Users(props) {
  return (
    <div>
      <div className="container">
        <div className="row">
          {(props.state?.loading && "loading") ||
            (props.state.users.length > 0 &&
              props.state.users.map((user, index) => (
                <div key={index} className="col-md-4">
                  <User user={user} />
                </div>
              ))) ||
            "no users found"}
        </div>
      </div>
    </div>
  );
}
export default Users;
