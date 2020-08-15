import React, { useContext } from "react";
import { MenuContext } from "../context/MenuContext";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
export default function DishDetailComponent(props) {
  const { dishes, selectedDish, renderDish, renderComments } = useContext(
    MenuContext
  );
  const dish = dishes.filter((dish) => dish.id === selectedDish)[0];
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">{renderDish(props.dish)}</div>
        <div className="col-12 col-md-5 m-1">
          {!props.comments
            ? renderComments(null)
            : renderComments(props.comments)}
        </div>
      </div>
    </div>
  );
}
