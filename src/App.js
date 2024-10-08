import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import Contact from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { Footer } from "./components/footer";
import Products from "./pages/products";

function App() {
  console.log("App component is rendering...");

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/waib3" element={<Shop />} />
              <Route path="/product" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
