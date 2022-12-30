import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import ProductDetails from "./pages/ProductDetails";
import data from './data.json';

function App() {

    const [products, setProducts] = useState<object[]>();
    const [quantity, setQuantity] = useState<object[]>([
        {id: 1, quantity: 1},
        {id: 2, quantity: 1},
        {id: 3, quantity: 1},
        {id: 4, quantity: 1},
        {id: 5, quantity: 1},
        {id: 6, quantity: 1},
    ]);
    const [cart, setCart] = useState<object[]>([]);
    const [viewCart, setViewCart] = useState<boolean>(false);

    const handleViewCart = () => {
        setViewCart(!viewCart);
    }

    useEffect(() => {
        setProducts(data);
    }, [])

  return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home viewCart={viewCart} handleViewCart={handleViewCart} cart={cart} setCart={setCart} quantity={quantity} setQuantity={setQuantity} />} />
                <Route path="headphones" element={<Headphones products={products} viewCart={viewCart} handleViewCart={handleViewCart} cart={cart} setCart={setCart} quantity={quantity} setQuantity={setQuantity} />} />
                <Route path="speakers" element={<Speakers products={products} viewCart={viewCart} handleViewCart={handleViewCart} cart={cart} setCart={setCart} quantity={quantity} setQuantity={setQuantity} />} />
                <Route path="earphones" element={<Earphones products={products} viewCart={viewCart} handleViewCart={handleViewCart} cart={cart} setCart={setCart} quantity={quantity} setQuantity={setQuantity} />} />
                <Route path="product-details/:slug" element={<ProductDetails products={products} viewCart={viewCart} handleViewCart={handleViewCart} cart={cart} setCart={setCart} quantity={quantity} setQuantity={setQuantity} />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
