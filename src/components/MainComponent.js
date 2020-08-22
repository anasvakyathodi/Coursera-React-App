import React, { useState } from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Menu from "./MenuComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import Dishdetail from "./DishdetailComponent";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export function Main() {
  const initialState = useSelector((state) => state);
  const { dishes, comments, promotions, leaders } = initialState;
  const HomePage = () => {
    return (
      <Home
        dish={dishes.filter((dish) => dish.featured)[0]}
        promotion={promotions.filter((promo) => promo.featured)[0]}
        leader={leaders.filter((leader) => leader.featured)[0]}
      />
    );
  };

  const DishWithId = ({ match }) => {
    return (
      <Dishdetail
        dish={
          dishes.filter(
            (dish) => dish.id === parseInt(match.params.dishId, 10)
          )[0]
        }
        comments={comments.filter(
          (comment) => comment.dishId === parseInt(match.params.dishId, 10)
        )}
      />
    );
  };

  const AboutwithLeader = () => {
    return <About leaders={leaders} />;
  };

  return (
    <>
      <Header />
      <Switch>
        <Route component={HomePage} exact path="/home" />
        <Route component={Menu} exact path="/menu" />
        <Route component={AboutwithLeader} exact path="/aboutus" />
        <Route component={Contact} exact path="/contactus" />
        <Route path="/menu/:dishId" component={DishWithId} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </>
  );
}

export default Main;
