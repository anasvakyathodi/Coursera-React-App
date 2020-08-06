import React, { useContext } from "react";
import { MenuContext } from "../context/MenuContext";
export default function DishDetailComponent() {
  const { dishes, selectedDish, renderDish, renderComments } = useContext(
    MenuContext
  );
  const dish = dishes.filter((dish) => dish.id === selectedDish)[0];
  return (
    <div className="row">
      <div className="col-12 col-md-5 m-1">{renderDish(dish)}</div>
      <div className="col-12 col-md-5 m-1">
        {!dish ? renderComments(null) : renderComments(dish.comments)}
      </div>
    </div>
  );
}
