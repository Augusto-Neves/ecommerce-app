import { Action } from "../../actions";
import { ActionTypes } from "../../actions-types";

type productType = {
    id: number;
    name: string;
    image: string;
    price: number;
}

type InitialStateType = {
    items: productType[];
}

const INITIAL_STATE : InitialStateType  = {
  items: []
};

const cartReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionTypes.CART_ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case ActionTypes.CART_REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item: { id: number }): boolean => {
          return item.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export default cartReducer;
