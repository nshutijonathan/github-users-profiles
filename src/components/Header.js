import React from "react";
// import SearchBox from "./SearchBox";

import { Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Navbar.Brand>Github Users</Navbar.Brand>
      </Navbar>
    </header>
  );
};

export default Header;
