import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import Dishdetail from "./DishdetailComponent";

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <div className="container">
        <Menu />
        <Dishdetail />
      </div>
    </div>
  );
}

export default App;
