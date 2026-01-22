import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation
} from 'react-router-dom';

import './App.css';
import Header from "./Header-footer/Header";
import Footer from './Header-footer/Footer';

import Home from "./pages/Homepage";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ShopDetailed from "./pages/ShopDetailed";
import CartPage from "./pages/CartPage";
import CheckoutPage from './pages/CheckOut';

import LoginPage from './pages/Login';
import SignUpPage from './pages/Signup';

import { CartProvider } from "./pages/CartContext";
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import ScrollToTop from './ScrollToTop';

function AppWrapper() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  );
}

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const hideLayoutRoutes = ["/login", "/signup"];
  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <CartProvider>
      {!hideLayout && <Header user={user} setUser={setUser} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop/:id" element={<ShopDetailed />} />
        <Route path="/cart" element={<CartPage user={user} />} />

        <Route
          path="/login"
          element={!user ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!user ? <SignUpPage /> : <Navigate to="/" />}
        />

        <Route
          path="/checkout"
          element={user ? <CheckoutPage /> : <Navigate to="/login" />}
        />
      </Routes>

      {!hideLayout && <Footer />}
    </CartProvider>
  );
}

export default AppWrapper;
