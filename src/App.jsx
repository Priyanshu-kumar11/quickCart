import React from 'react';
import './App.css';
import { createHashRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Cart from './components/Cart/Cart';
import { CartProvider } from './contextApi/CartContext';
import { AuthProvider } from './contextApi/AuthContext';  
import MapComponent from './components/MapComponent/MapComponent';
import UserProfile from './components/UserProfile/UserProfile';
import Login from './components/Login/Login';

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/map", element: <MapComponent /> },
      { path: "/products/:id", element: <UserProfile /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <AuthProvider>  {/* ✅ Wrap the App with AuthProvider */}
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
