import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Nav from '../components/Nav';
import Introduction from "../components/Introduction";
import Footer from '../components/Footer';
import ProductThumbnail from "../components/ProductThumbnail";

function Earphones({products, viewCart, handleViewCart, cart, setCart, quantity, setQuantity, total, setTotal}  : any) {

    const earphones = products.filter((product : any) => product.category === 'earphones');

    const [categoryProduct, setProduct] = useState<object[]>(earphones);

    return (
        <div className="w-full min-h-screen">
            <Nav viewCart={viewCart} handleViewCart={handleViewCart} cart={cart} setCart={setCart} quantity={quantity} setQuantity={setQuantity} total={total} setTotal={setTotal} />
            <div className="w-full h-56 bg-black flex items-center justify-center">
                <h1 className="uppercase text-white text-3xl font-bold">
                    earphones
                </h1>
            </div>
            {categoryProduct.map((item : any) => {
                return (
                    <div className="w-3/4 ml-auto mr-auto flex mt-36" key={item.id}>
                        <div className="w-1/2">
                            <img
                                className="w-4/5 h-full"
                                src={item.categoryImage.desktop}
                                alt={item.name}
                            />
                        </div>
                        <div className="w-1/2">
                            <div className="w-2/3 h-2/3 ml-auto mr-auto flex flex-col justify-center space-y-6">
                                {item.new ? <h1 className="uppercase text-orange-500 tracking-widest text-xl">new product</h1> : null}
                                <h1 className="text-5xl font-bold">
                                    {item.name}
                                </h1>
                                <p className="text-neutral-400 font-bold">
                                    {item.description}
                                </p>
                                <Link className="w-1/3 h-10 uppercase text-white flex items-center justify-center bg-orange-500 hover:text-gray-400" to={`/product-details/${item.slug}`}>
                                    see product
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })}
            <ProductThumbnail />
            <Introduction />
            <Footer />
        </div>
    );
}

export default Earphones;