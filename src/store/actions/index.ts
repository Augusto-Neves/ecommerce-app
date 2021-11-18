interface AddItemAction {
  type: "CART_ADD_ITEM";
  payload: {
    id: number;
    name: string;
    image: string;
    price: number;
  };
}

interface RemoveItemAction {
  type: "CART_REMOVE_ITEM";
  payload: number;
}

export type Action = AddItemAction | RemoveItemAction;
