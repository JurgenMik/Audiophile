import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import data from './data.json';

function App() {

    const [products, setProducts] = useState<object[]>();

    useEffect(() => {
        setProducts(data);
    }, [])

  return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="headphones" element={<Headphones products={products} />} />
                <Route path="speakers" element={<Speakers products={products} />} />
                <Route path="earphones" element={<Earphones products={products} />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
