import { BrowserRouter, Route, Routes, Navigate, useLocation, useNavigate } from 'react-router-dom';
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
import { CartProvider } from "./pages/CartContext";
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import LoginPage from './pages/Login';
import SignUpPage from './pages/Signup';


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
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/") {
      navigate("/");
    }
  }, []);

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
      {user && <Header user={user} setUser={setUser} />}
      <Routes>
        <Route
          path="/login"
          element={!user ? <LoginPage /> : <Navigate to="/" />}
        />

        <Route
          path="/signup"
          element={!user ? <SignUpPage /> : <Navigate to="/" />}
        />

        <Route
          path='/'
          element={user ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path='/shop'
          element={user ? <Shop /> : <Navigate to="/login" />}
        />
        <Route
          path='/about'
          element={user ? <About /> : <Navigate to="/login" />}
        />
        <Route
          path='/contact'
          element={user ? <Contact /> : <Navigate to="/login" />}
        />
        <Route
          path='/shop/:id'
          element={user ? <ShopDetailed /> : <Navigate to="/login" />}
        />
        <Route
          path='/cart'
          element={user ? <CartPage /> : <Navigate to="/login" />}
        />
        <Route
          path='/checkout'
          element={user ? <CheckoutPage /> : <Navigate to="/login" />}
        />
      </Routes>
      {user && <Footer />}
    </CartProvider>
  );
}

export default AppWrapper;
