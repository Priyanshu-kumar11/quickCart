import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Cart from './components/Cart/Cart';
import { CartProvider } from './contextApi/CartContext'; 
import MapComponent from './components/MapComponent/MapComponent';
import UserProfile from './components/UserProfile/UserProfile';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
        <Navbar />
        <Home />
        <Footer /></>
      ),
    },
    {
      path: "/map",
      element: (
       <>
        <Navbar />
        <MapComponent/>
        <Footer />
       </>
      ),
    },
    {
      path: "/footer",
      element: (
       <>
         <Navbar />
       
        <Footer/>
       </>
      ),
    },
    {
      path: "/users/:id",  
      element: (
        <>
          <Navbar />
          <UserProfile /> 
          <Footer />
        </>
      ),
    },{
      path: "/cart",
      element: (
        <>
          <Navbar />
          <Cart />
          <Footer />
        </>
      ),
    }
  ]);

  return (
    <CartProvider> {/* Wrap the entire app with CartProvider */}
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
