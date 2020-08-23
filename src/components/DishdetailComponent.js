import React, { useContext, useState } from "react";
import { MenuContext } from "../context/MenuContext";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Row,
  Col,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";
export default function DishDetailComponent(props) {
  const { dishes, selectedDish, renderDish, renderComments } = useContext(
    MenuContext
  );

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const handleSubmit = (values) => {
    alert(`Current State: \n ${JSON.stringify(values)}`);
  };

  // const CommentModal = () => {
  //   return (

  //   );

  const handleClick = () => {
    setModal(true);
    // commentModal();
  };
  const CommentForm = () => {
    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !val || val.length <= len;
    const minLength = (len) => (val) => val && val.length >= len;
    return (
      <div className="col-12 col-md-5 m-1">
        {!props.comments
          ? renderComments(null)
          : renderComments(props.comments)}
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Submit Comment</ModalHeader>
          <ModalBody>
            <div className="container">
              <LocalForm onSubmit={(values) => handleSubmit(values)}>
                <Row className="form-group">
                  <Label htmlFor="rating">Rating</Label>
                  <Control.select
                    model=".rating"
                    name="rating"
                    id="rating"
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="author">Your Name</Label>
                  <Control.text
                    model=".author"
                    id="author"
                    name="author"
                    placeholder="Your Name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Row>
                <Row className="form-group">
                  <Label htmlFor="comment">Comment</Label>
                  <Control.textarea
                    model=".comment"
                    name="comment"
                    rows="6"
                    className="form-control"
                  ></Control.textarea>
                </Row>
                <Row>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Row>
              </LocalForm>
            </div>
          </ModalBody>
        </Modal>
        <Button outline color="secondary" className="m-2" onClick={handleClick}>
          <i className="fa fa-pencil fa-lg mr-1"></i>
          Submit Comment
        </Button>
      </div>
    );
  };

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
        <div>
          <CommentForm />
        </div>
      </div>
    </div>
  );
}
