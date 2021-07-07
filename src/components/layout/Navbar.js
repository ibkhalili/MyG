import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar as NavBot,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";

function Navbar({ setText }) {
  const [state, setState] = useState("");
  const searchUsers = (e) => {
    e.preventDefault();
    setText(state);
  };

  const handleForm = (e) => {
    setState(e.target.value);
  };
  return (
    <>
      <NavBot bg="info" expand="lg">
        <NavBot.Brand>
          <Link className="text-dark mr-3" to="/signin">
            Sign in
          </Link>
          <Link className="text-secondary mx-4" to="/users">
            Get User
          </Link>
        </NavBot.Brand>
        <NavBot.Toggle aria-controls="basic-NavBot-nav" />
        <NavBot.Collapse id="basic-NavBot-nav">
          <Nav className="mr-auto ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              mr-auto me-sm-3 mx-4
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                mr-auto me-sm-3 mx-4 Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline onSubmit={searchUsers}>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={handleForm}
            />
            <Button type="submit" variant="dark">
              Search
            </Button>
          </Form>
        </NavBot.Collapse>
      </NavBot>
    </>
  );
}

export default Navbar;
