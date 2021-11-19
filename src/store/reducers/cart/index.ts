import { Action } from "../../actions";
import { ActionTypes } from "../../actions-types";

type productType = {
  id: number;
  name: string;
  image: string;
  price: number;
};

type InitialStateType = {
  items: productType[];
  totalPrice: number;
};

const INITIAL_STATE: InitialStateType = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionTypes.CART_ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
        totalPrice: state.totalPrice + action.payload.price,
      };
    case ActionTypes.CART_REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(
          (item: productType): boolean => item.id !== action.payload.id
        ),
        totalPrice: state.totalPrice - action.payload.price,
      };
    default:
      return state;
  }
};

export default cartReducer;
