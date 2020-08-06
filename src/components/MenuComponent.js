import React, { useContext } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { MenuContext } from "../context/MenuContext";
function MenuComponent() {
  const { dishes, onDishSelect } = useContext(MenuContext);
  const menu = dishes.map((dish) => (
    <div key={dish.id} className="col-12 col-md-5 m-1">
      <Card onClick={() => onDishSelect(dish.id)}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  ));
  return <div className="row">{menu}</div>;
}

export default MenuComponent;
