import { Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { ShoppingCart } from "./pages/ShoppingCart";

function MyRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={ShoppingCart} />
    </Switch>
  );
}

export default MyRoutes;
