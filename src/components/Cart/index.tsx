import { useSelector, useDispatch } from "react-redux";
import { ActionTypes } from "../../store/actions-types";
import { State } from "../../store/reducers";
import toast, { Toaster } from "react-hot-toast";
import "./styles.css";

export const Cart = () => {
  const cartItems = useSelector((state: State) => state.cart.items);
  const totalPrice = useSelector((state: State) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const handleRemoveItem = (product: any) => {
    dispatch({
      type: ActionTypes.CART_REMOVE_ITEM,
      payload: product,
    });
    toast.success("Item removed from cart");
  };
  return (
    <>
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <strong>No items in cart</strong>
        ) : (
          cartItems.map((item) => {
            return (
              <>
                <div key={item.id} className="product">
                  <strong>{item.name}</strong>
                  <p>R${item.price.toFixed(2).toString().replace(".", ",")}</p>
                  <img
                    src={item.image}
                    alt={item.name}
                    width="175"
                    height="160"
                  />
                  <button onClick={() => handleRemoveItem(item)}>
                    Remove item
                  </button>
                </div>
              </>
            );
          })
        )}
      </div>
      <footer>
        <h2>Total Price</h2>
        <strong>R${totalPrice.toFixed(2).toString().replace(".", ",")}</strong>
      </footer>
      <Toaster />
    </>
  );
};
