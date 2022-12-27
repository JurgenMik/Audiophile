import React from 'react';
import {Link} from 'react-router-dom';
import {BsCart3} from 'react-icons/bs';

function Nav() {
    return (
        <nav className="w-full h-24 bg-black">
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
                    <BsCart3 className="text-white text-2xl float-right hover:text-gray-400" />
                </div>
            </div>
        </nav>
    );
}

export default Nav;