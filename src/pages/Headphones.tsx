import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Nav from '../components/Nav';
import Introduction from "../components/Introduction";
import Footer from '../components/Footer';
import ProductThumbnail from "../components/ProductThumbnail";

function Headphones({products} : any) {

    const headphones = products.filter((product : any) => product.category === 'headphones');

    const [categoryProduct, setProduct] = useState<object[]>(headphones);

    return (
        <div className="w-full min-h-screen">
            <Nav />
            <div className="w-full h-56 bg-black flex items-center justify-center">
                <h1 className="uppercase text-white text-3xl font-bold">
                    headphones
                </h1>
            </div>
            {categoryProduct.map((item : any) => {
                return (
                    <div className="w-3/4 ml-auto mr-auto flex mt-36" key={item.id}>
                        <div className="w-1/2">
                            {item.name === 'XX99 Mark I Headphones' ?
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
                                </div> :
                                <img
                                    className="w-4/5 h-full"
                                    src={item.categoryImage.desktop}
                                    alt={item.name}
                                />
                            }
                        </div>
                        <div className="w-1/2">
                            {item.name === 'XX99 Mark I Headphones' ?
                                <img
                                    className="w-4/5 h-full"
                                    src={item.categoryImage.desktop}
                                    alt={item.name}
                                /> :
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
                            }
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

export default Headphones;