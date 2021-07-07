import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";
import { useParams } from "react-router";

const UserFollowers = (props) => {
  const [followers, setFollowers] = useState([]);
  const { login } = useParams();

  useEffect(() => {
    const getFollowers = async () => {
      const { data } = await axios.get(
        `https://api.github.com/users/${login}/followers`
      );
      setFollowers(data);
    };
    getFollowers();

    return () => {
      // console.log(1337);
    };
  }, [followers]);
  // console.log(followers);
  return (
    <div>
      {followers.map((follower) => {
        return <User key={follower?.node_id} user={follower} />;
      })}
    </div>
  );
};

export default UserFollowers;
