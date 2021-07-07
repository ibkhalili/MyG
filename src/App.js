

import React, { useState, useEffect } from "react";
import "./App.css";
import Users from "./components/Users/Users";
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/Users/UserItem";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserFollowers from "./components/Users/UserFollowers";
import axios from "axios";
import SignIn from "./components/layout/SignIn";

function App() {

  const [text, setText] = useState("");
  const [users, setUsers] = useState([
    {
      login: "ibkhalili",
      id: 1,
      avatar_url: "https://avatars.githubusercontent.com/u/55959800?v=4",
      url: "https://api.github.com/users/ibkhalili",
      html_url: "https://github.com/ibkhalili",
      repos_url: "https://api.github.com/users/ibkhalili",
    },
    {
      login: "ilkou",
      id: 2,
      avatar_url: "https://avatars.githubusercontent.com/u/48165230?v=4",
      url: "https://api.github.com/users/ilkou",
      html_url: "https://github.com/ilkou",
      repos_url: "https://api.github.com/users/ilkou",
    },
    
  ]);

  const [loading, setLoading] = useState(false);

  const getUsers = () => {
    setLoading(true);
    axios.get("https://api.github.com/users").then((response) => {
      setUsers([...users, ...response.data]);
      setLoading(false);
    });
  };

  const searchUsersFromGit = (data) => {
    setLoading(true);
    axios
      .get(`https://api.github.com/search/users?q=${data}`)
      .then((response) => {
        setUsers(response.data.items);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (text !== "") searchUsersFromGit(text);
    else getUsers();
  }, [text]);

  return (
    <Router>
      <div className="App">
        <Navbar setText={setText} />
        <div className="container-fluid">
          <Switch>
            <Route
              exact
              path="/users"
              component={() => (
                <Users state={{ users: users, loading: loading }} />
              )}
            />
            <Route exact path="/users/:login" component={UserItem} />
            <Route exat path="/signin" component={SignIn} />
            <Route
              exact
              path="/users/:login/followers"
              component={UserFollowers}
            />
            <Route
              exact
              component={() => (
                <Users state={{ users: users, loading: loading }} />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
