import React from 'react';
import {Link} from 'react-router-dom';
import Cart from './Cart';
import {BsCart3} from 'react-icons/bs';

function Nav({viewCart, handleViewCart, cart, setCart, quantity, setQuantity} : any) {
    return (
        <nav className="w-full h-24 bg-black relative">
            <div className="w-3/4 h-full flex items-center ml-auto mr-auto border-b border-zinc-700">
                <div className="w-1/5">
                    <img
                        src="../assets/logo.svg"
                        alt="logo"
                    />
                </div>
                <div className="w-3/5 text-white flex justify-center space-x-10 font-medium">
                    <Link className="uppercase hover:text-orange-400" to="/">
                        home
                    </Link>
                    <Link className="uppercase hover:text-orange-400" to="/headphones">
                        headphones
                    </Link>
                    <Link className="uppercase hover:text-orange-400" to="/speakers">
                        speakers
                    </Link>
                    <Link className="uppercase hover:text-orange-400" to="/earphones">
                        earphones
                    </Link>
                </div>
                <div className="w-1/5">
                    <BsCart3 onClick={handleViewCart} className="text-white text-2xl float-right hover:text-gray-400" />
                </div>
            </div>
            {viewCart ? <Cart cart={cart} setCart={setCart} quantity={quantity} setQuantity={setQuantity} /> : null}
        </nav>
    );
}

export default Nav;