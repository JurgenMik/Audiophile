import React, {useEffect, useState} from 'react';
import {HiOutlinePlus, HiOutlineMinusSm} from 'react-icons/hi'
import { useParams, useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom';
import Nav from '../components/Nav';
import Introduction from "../components/Introduction";
import ProductThumbnail from "../components/ProductThumbnail";
import Footer from '../components/Footer';

function ProductDetails({products, quantity, setQuantity, setCart, cart} : any) {

    let { slug } : any = useParams();
    let navigate : any = useNavigate();

    const product = products.find((product : any) => product.slug === slug);

    const [selected, setSelected] = useState({...product});

    let itemCount = quantity.find((item : any) => item.id === selected.id);

    useEffect(() => {
        setSelected({...product});
    }, [slug])

    const handleNavigateBack = () => {
        navigate(-1);
    }

    const handleQuantityInc = () => {
        let quantities : any = [...quantity];
        let index : number = quantity.findIndex((item : any) => item.id === selected.id);

        quantities[index].quantity++;

        setQuantity(quantities);
    }

    const handleQuantityDec = () => {
        let quantities : any = [...quantity];
        let index : number = quantity.findIndex((item : any) => item.id === selected.id);

        if (quantities[index].quantity > 0) {
            quantities[index].quantity--;

            setQuantity(quantities);
        }
    }

    const handleAddToCart = () => {
        let items = [...cart];

        items.push(selected);
        items.push(itemCount);

        setCart(items);
    }

    return (
        <div className="w-full min-h-screen">
            <Nav />
            <div className="w-3/4 h-24 ml-auto mr-auto flex items-end">
                <h1 onClick={handleNavigateBack} className="text-gray-600 hover:text-gray-400">
                    Go Back
                </h1>
            </div>
            <div className="w-3/4 ml-auto mr-auto flex mt-16">
                <div className="w-1/2">
                    <img
                        src={selected.categoryImage.desktop}
                        alt={selected.name}
                        className="w-4/5 h-full"
                    />
                </div>
                <div className="w-1/2">
                    <div className="w-2/3 h-2/3 ml-auto mr-auto flex flex-col justify-center space-y-6">
                        {selected.new ? <h1 className="uppercase text-orange-500 tracking-widest text-xl">new product</h1> : null}
                        <h1 className="text-5xl font-bold">
                            {selected.name}
                        </h1>
                        <p className="text-neutral-400 font-bold">
                            {selected.description}
                        </p>
                        <p className="font-bold">
                           ${selected.price}
                        </p>
                        <div className="w-2/3 h-14 flex space-x-4">
                            <div className="w-2/5 bg-gray-200 flex items-center justify-center space-x-6">
                                <HiOutlineMinusSm onClick={handleQuantityDec} className="text-xs text-gray-400 hover:text-gray-600" />
                                <p className="text-lg font-bold">
                                    {itemCount.quantity}
                                </p>
                                <HiOutlinePlus onClick={handleQuantityInc} className="text-xs text-gray-400 hover:text-gray-600" />
                            </div>
                            <button onClick={handleAddToCart} className="w-3/5 uppercase text-white font-bold bg-orange-500 hover:bg-orange-400">
                                add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-3/4 ml-auto mr-auto flex mt-36">
                <div className="w-1/2">
                    <h1 className="text-3xl font-bold uppercase">
                        features
                    </h1>
                    <p className="text-neutral-400 mt-8">
                        {selected.features}
                    </p>
                </div>
                <div className="w-1/2">
                    <h1 className="text-3xl font-bold text-center uppercase mb-8">
                        in the box
                    </h1>
                    {selected.includes.map((item : any) => {
                        return (
                            <div className="w-1/3 ml-auto mr-auto flex space-x-6 mt-2 pl-12" key={item.item}>
                                <span className="text-orange-500 font-bold">
                                    {item.quantity}x
                                </span>
                                <h1 className="text-neutral-400 font-bold">
                                    {item.item}
                                </h1>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="w-3/4 ml-auto mr-auto flex items-center space-x-6 mt-36">
                <div className="w-2/5 space-y-6">
                    <img
                        className="w-full h-2/5 rounded-lg"
                        src={selected.gallery.first.desktop}
                        alt="gallery-photo"
                    />
                    <img className="w-full h-2/5 rounded-lg"
                         src={selected.gallery.second.desktop}
                         alt="gallery-photo"
                    />
                </div>
                <div className="w-3/5">
                    <img className="w-full h-5/6 rounded-lg"
                         src={selected.gallery.third.desktop}
                         alt="gallery-photo"
                    />
                </div>
            </div>
            <div className="w-2/3 ml-auto mr-auto mt-36">
                <div className="w-full h-16 flex items-center text-3xl justify-center uppercase font-bold mb-4">
                    you may also like
                </div>
                <div className="w-3/4 h-80 flex ml-auto mr-auto space-x-6">
                    {selected.others.map((other : any) => {
                        return (
                            <div className="w-1/3 h-full" key={other.name}>
                                <img
                                    src={other.image.desktop}
                                    alt="gallery-photo"
                                />
                                <div className="w-full flex flex-col justify-center items-center space-y-6">
                                    <h1 className="text-2xl font-bold mt-4">
                                        {other.name}
                                    </h1>
                                    <Link className="w-1/2 h-10 uppercase text-white flex items-center justify-center bg-orange-500 hover:text-gray-400" to={`/product-details/${other.slug}`}>
                                        see product
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <ProductThumbnail />
            <Introduction />
            <Footer />
        </div>
    );
}

export default ProductDetails;