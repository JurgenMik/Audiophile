import React from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav';
import Introduction from "./Introduction";
import Footer from './Footer';

function Home() {
    return (
        <div className="w-full min-h-screen">
            <Nav />
            <div className="w-full h-1/2 bg-neutral-900">
                <div className="w-3/4 h-full ml-auto mr-auto flex">
                    <div className="w-3/5 flex flex-col justify-center bg-neutral-900">
                        <div className="w-1/2 mb-6">
                            <h1 className="uppercase text-lg text-neutral-500 tracking-widest">
                                new product
                            </h1>
                        </div>
                        <div className="w-3/5 flex flex-col space-y-6">
                            <h1 className="uppercase text-6xl text-white font-bold">
                                xx99 mark ii headphones
                            </h1>
                            <p className="text-gray-400">
                                Experience natural, lifelike audio and exceptional build quality made for the passionate music
                                enthusiast.
                            </p>
                            <Link className="w-1/4 h-10 bg-orange-500 text-white text-md flex justify-center items-center uppercase hover:text-gray-400" to={""}>
                                see product
                            </Link>
                        </div>
                    </div>
                    <div className="w-2/5 h-full flex justify-center">
                        <img
                            className="w-full h-1/3"
                            src="../assets/actual-hero-image.png"
                            alt="hero"
                        />
                    </div>
                </div>
            </div>
            <Introduction />
            <Footer />
        </div>
    );
}

export default Home;