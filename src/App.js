import { Route, Routes } from "react-router";

import Product from "./components/Product";
import ProductsList from "./components/ProductsList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" element={<ProductsList />} />
        <Route strict exact path="/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
