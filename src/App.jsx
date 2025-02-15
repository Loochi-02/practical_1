import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ErrorPage from "./pages/ErroPage";
import Fruits from "./pages/Fruits";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Cart from "./pages/cart";
import Checkout from "./pages/Checkout";
import Shop from "./components/ProductCard";

function App() {
  const loadScripts = (src, async = true) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = async;
      script.onload = () => {
        if (src.includes("jquery") && !window.jQuery) {
          reject(new Error("jQuery not loaded"));
        } else {
          resolve();
        }
      };
      script.onerror = (err) => reject(err);
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScripts("/js/jquery-3.4.1.min.js")
      .then(() => loadScripts("/js/bootstrap.js"))
      .then(() => console.log("Scripts loaded successfully !"))
      .catch((err) => console.error("Error loading script:", err));
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Fruits" element={<Fruits />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
      <Shop />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
