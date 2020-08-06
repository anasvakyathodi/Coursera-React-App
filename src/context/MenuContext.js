import React, { useState, createContext } from "react";
import { Card, CardImg, CardTitle, CardText, CardBody } from "reactstrap";
export const MenuContext = createContext();
const MenuContextProvider = (props) => {
  const dishes = [
    {
      id: 0,
      name: "Uthappizza",
      image: "assets/images/uthappizza.png",
      category: "mains",
      label: "Hot",
      price: "4.99",
      description:
        "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
      comments: [
        {
          id: 0,
          rating: 5,
          comment: "Imagine all the eatables, living in conFusion!",
          author: "John Lemon",
          date: "2012-10-16T17:57:28.556094Z",
        },
        {
          id: 1,
          rating: 4,
          comment:
            "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
          author: "Paul McVites",
          date: "2014-09-05T17:57:28.556094Z",
        },
        {
          id: 2,
          rating: 3,
          comment: "Eat it, just eat it!",
          author: "Michael Jaikishan",
          date: "2015-02-13T17:57:28.556094Z",
        },
        {
          id: 3,
          rating: 4,
          comment: "Ultimate, Reaching for the stars!",
          author: "Ringo Starry",
          date: "2013-12-02T17:57:28.556094Z",
        },
        {
          id: 4,
          rating: 2,
          comment: "It's your birthday, we're gonna party!",
          author: "25 Cent",
          date: "2011-12-02T17:57:28.556094Z",
        },
      ],
    },
    {
      id: 1,
      name: "Zucchipakoda",
      image: "assets/images/zucchipakoda.png",
      category: "appetizer",
      label: "",
      price: "1.99",
      description:
        "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce",
      comments: [
        {
          id: 0,
          rating: 5,
          comment: "Imagine all the eatables, living in conFusion!",
          author: "John Lemon",
          date: "2012-10-16T17:57:28.556094Z",
        },
        {
          id: 1,
          rating: 4,
          comment:
            "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
          author: "Paul McVites",
          date: "2014-09-05T17:57:28.556094Z",
        },
        {
          id: 2,
          rating: 3,
          comment: "Eat it, just eat it!",
          author: "Michael Jaikishan",
          date: "2015-02-13T17:57:28.556094Z",
        },
        {
          id: 3,
          rating: 4,
          comment: "Ultimate, Reaching for the stars!",
          author: "Ringo Starry",
          date: "2013-12-02T17:57:28.556094Z",
        },
        {
          id: 4,
          rating: 2,
          comment: "It's your birthday, we're gonna party!",
          author: "25 Cent",
          date: "2011-12-02T17:57:28.556094Z",
        },
      ],
    },
    {
      id: 2,
      name: "Vadonut",
      image: "assets/images/vadonut.png",
      category: "appetizer",
      label: "New",
      price: "1.99",
      description:
        "A quintessential ConFusion experience, is it a vada or is it a donut?",
      comments: [
        {
          id: 0,
          rating: 5,
          comment: "Imagine all the eatables, living in conFusion!",
          author: "John Lemon",
          date: "2012-10-16T17:57:28.556094Z",
        },
        {
          id: 1,
          rating: 4,
          comment:
            "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
          author: "Paul McVites",
          date: "2014-09-05T17:57:28.556094Z",
        },
        {
          id: 2,
          rating: 3,
          comment: "Eat it, just eat it!",
          author: "Michael Jaikishan",
          date: "2015-02-13T17:57:28.556094Z",
        },
        {
          id: 3,
          rating: 4,
          comment: "Ultimate, Reaching for the stars!",
          author: "Ringo Starry",
          date: "2013-12-02T17:57:28.556094Z",
        },
        {
          id: 4,
          rating: 2,
          comment: "It's your birthday, we're gonna party!",
          author: "25 Cent",
          date: "2011-12-02T17:57:28.556094Z",
        },
      ],
    },
    {
      id: 3,
      name: "ElaiCheese Cake",
      image: "assets/images/elaicheesecake.png",
      category: "dessert",
      label: "",
      price: "2.99",
      description:
        "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms",
      comments: [
        {
          id: 0,
          rating: 5,
          comment: "Imagine all the eatables, living in conFusion!",
          author: "John Lemon",
          date: "2012-10-16T17:57:28.556094Z",
        },
        {
          id: 1,
          rating: 4,
          comment:
            "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
          author: "Paul McVites",
          date: "2014-09-05T17:57:28.556094Z",
        },
        {
          id: 2,
          rating: 3,
          comment: "Eat it, just eat it!",
          author: "Michael Jaikishan",
          date: "2015-02-13T17:57:28.556094Z",
        },
        {
          id: 3,
          rating: 4,
          comment: "Ultimate, Reaching for the stars!",
          author: "Ringo Starry",
          date: "2013-12-02T17:57:28.556094Z",
        },
        {
          id: 4,
          rating: 2,
          comment: "It's your birthday, we're gonna party!",
          author: "25 Cent",
          date: "2011-12-02T17:57:28.556094Z",
        },
      ],
    },
  ];
  const [selectedDish, setSelectedDish] = useState(null);
  const onDishSelect = (dishid) => {
    setSelectedDish(dishid);
  };
  const renderDish = (dish) => {
    return dish != null ? (
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    ) : (
      <div></div>
    );
  };
  const renderComments = (comments) => {
    return comments != null ? (
      <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map((e) => (
            <li key={e.id}>
              <p>{e.comment}</p>
              <p>
                -- {e.author} , {e.date}
              </p>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <div></div>
    );
  };

  return (
    <MenuContext.Provider
      value={{ dishes, selectedDish, onDishSelect, renderDish, renderComments }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
