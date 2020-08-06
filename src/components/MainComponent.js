import React from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Menu from "./MenuComponent";
import Dishdetail from "./DishdetailComponent";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Menu />
        <Dishdetail />
      </div>
      <Footer />
    </>
  );
}

export default App;
