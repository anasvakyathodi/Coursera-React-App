import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { NavLink } from "react-router-dom";

function Header() {
  const [toggleNav, setToggleNav] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const remember = e.target.remember.value;
    alert(
      `username: ${username}\npassword: ${password}\nRemember Password:${remember}`
    );
  };

  return (
    <>
      <Modal isOpen={toggleModal} toggle={() => setToggleModal(!toggleModal)}>
        <ModalHeader toggle={() => setToggleModal(!toggleModal)}>
          Login
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleLogin}>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input type="text" id="username" name="username" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" name="password" />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="remember" />
                Remember me
              </Label>
            </FormGroup>
            <Button type="submit" value="submit" color="primary">
              Login
            </Button>
          </Form>
        </ModalBody>
      </Modal>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler onClick={() => setToggleNav(!toggleNav)} />
          <NavbarBrand className="mr-auto" href="/">
            <img
              src="assets/images/logo.png"
              height="30"
              width="41"
              alt="Ristorante Con Fusion"
            />
          </NavbarBrand>
          <Collapse navbar isOpen={toggleNav}>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home fa-lg"></span> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/aboutus">
                  <span className="fa fa-info fa-lg"></span> About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/menu">
                  <span className="fa fa-list fa-lg"></span> Menu
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contactus">
                  <span className="fa fa-list fa-lg"></span> Contact Us
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button outline onClick={() => setToggleModal(!toggleModal)}>
                <span className="fa fa-sign-in fa-lg"></span> Login
              </Button>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Restorante Con Fusion</h1>
              <p>
                We take inspirations from the World's best cuisines, and create
                a unique fusion experience. Our lipsmacking creations will
                tickle your culinary senses!
              </p>
            </div>
          </div>
        </div>
      </Jumbotron>
    </>
  );
}

export default Header;
