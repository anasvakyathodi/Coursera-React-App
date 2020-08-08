import React, { useState } from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Menu from "./MenuComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import { COMMENTS } from "../context/Comments";
import { PROMOTIONS } from "../context/Promotions";
import { DISHES } from "../context/dishes";
import { LEADERS } from "../context/leaders";
// import Dishdetail from "./DishdetailComponent";
import { Route, Switch, Redirect } from "react-router-dom";
function App() {
  const dishes = DISHES;
  const comments = COMMENTS;
  const promotions = PROMOTIONS;
  const leaders = LEADERS;

  function HomePage() {
    return (
      <Home
        dish={dishes.filter((dish) => dish.featured)[0]}
        promotion={promotions.filter((promo) => promo.featured)[0]}
        leader={leaders.filter((leader) => leader.featured)[0]}
      />
    );
  }
  return (
    <>
      <Header />
      <Switch>
        <Route component={HomePage} exact path="/home" />
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
