import { useSelector, useDispatch } from "react-redux";
import { ActionTypes } from "../../store/actions-types";
import { State } from "../../store/reducers";
import toast, { Toaster } from "react-hot-toast";

import "./styles.css";


export const Products = () => {
  const allProducts = useSelector((state: State) => state.products);
  const dispatch = useDispatch();
  

  const handleAddToCart = (product: any) => {
    dispatch({
      type: ActionTypes.CART_ADD_ITEM,
      payload: product,
    }); 
    toast.success("Item added to cart");
      
  };
  return (
    <div className="products-container">
      {allProducts.items.map((item) => {
        return (
          <div key={item.id} className="product">
            <strong>{item.name}</strong>
            <p>price: R${item.price.toFixed(2).toString().replace(".", ",")}</p>

            <img src={item.image} alt={item.name} width="175" height="160" />

            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        );
      })}      
      <Toaster /> 
    </div>
  );
};
