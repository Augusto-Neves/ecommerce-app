import { Header } from "./components/Header";

import "./App.css";
import MyRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <Header />      
      <MyRoutes />
    </div>
  );
}

export default App;
