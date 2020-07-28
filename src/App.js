import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import MenuContextProvider from "./context/MenuContext";
import MenuComponent from "./components/MenuComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <MenuContextProvider>
        <MenuComponent />
      </MenuContextProvider>
    </div>
  );
}

export default App;
