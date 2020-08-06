import React from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Menu from "./MenuComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
// import Dishdetail from "./DishdetailComponent";
import { Route, Switch, Redirect } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route component={Home} exact path="/home" />
        <Route component={Menu} exact path="/menu" />
        <Route component={About} exact path="/aboutus" />
        <Route component={Contact} exact path="/contactus" />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
