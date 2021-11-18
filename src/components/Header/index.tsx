import { useSelector } from "react-redux";
import { State } from "../../store/reducers";
import Cart from "../../images/cart.svg";
import { Link } from "react-router-dom";

import "./styles.css";

export const Header = () => {
  const cartProductsLength = useSelector(
    (state: State) => state.cart.items.length
  );
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Grocery</h1>
        </Link>
        <button>
          <Link to="/cart">
            <strong>{cartProductsLength}</strong>
            <img src={Cart} alt="Shopping Cart" />
          </Link>
        </button>
      </div>
    </header>
  );
};
