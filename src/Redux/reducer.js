import { COMMENTS } from "../context/Comments";
import { PROMOTIONS } from "../context/Promotions";
import { DISHES } from "../context/dishes";
import { LEADERS } from "../context/leaders";

export const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  promotions: PROMOTIONS,
  leaders: LEADERS,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
