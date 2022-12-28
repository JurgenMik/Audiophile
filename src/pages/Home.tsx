import React from 'react';
import {Link} from 'react-router-dom';
import Nav from '../components/Nav';
import Introduction from "../components/Introduction";
import Footer from '../components/Footer';
import ProductThumbnail from "../components/ProductThumbnail";

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
                            <Link className="w-1/4 h-10 bg-orange-500 text-white text-sm flex justify-center items-center uppercase hover:text-gray-400" to={""}>
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
            <ProductThumbnail />
            <div className="w-3/4 bg-orange-500 ml-auto mr-auto rounded-md mt-48 flex bg-pattern bg-no-repeat">
                <div className="w-3/5 h-66 flex justify-center">
                    <img
                        className="w-1/2 h-full mt-2"
                        src="../assets/image-speaker-zx9.png"
                        alt="speaker"
                    />
                </div>
                <div className="w-1/4 flex flex-col justify-center space-y-6">
                    <h1 className="text-white uppercase font-bold text-6xl">
                        zx9 speaker
                    </h1>
                    <p className="text-gray-300">
                        Upgrade to premium speakers that are phenomenally built to deliver
                        truly remarkable sound.
                    </p>
                    <Link className="w-2/5 h-10 flex items-center text-sm justify-center text-white bg-black uppercase hover:text-gray-400" to={""}>
                        see product
                    </Link>
                </div>
            </div>
            <div className="w-3/4 h-80 ml-auto mr-auto bg-background bg-cover rounded-md mt-12">
                <div className="w-3/4 h-full ml-auto mr-auto flex flex-col justify-center space-y-6">
                    <h1 className="uppercase text-3xl font-bold">
                        zx7 speaker
                    </h1>
                    <Link className="w-1/6 h-10 flex items-center text-sm justify-center font-bold border border-black uppercase hover:text-gray-400" to={""}>
                        see product
                    </Link>
                </div>
            </div>
            <div className="w-3/4 h-78 ml-auto mr-auto mt-12 flex space-x-8">
                <div className="w-1/2 rounded-md">
                    <img
                        className="w-full h-full rounded-md"
                        src="../assets/image-earphones-yx1.jpg"
                        alt="earphones"
                    />
                </div>
                <div className="w-1/2 bg-gray-200 rounded-md">
                    <div className="w-3/5 h-full ml-auto mr-auto flex flex-col justify-center space-y-6">
                        <h1 className="uppercase text-4xl font-bold">
                            yx1 earphones
                        </h1>
                        <Link className="w-1/3 h-12 flex items-center text-sm justify-center font-bold border border-black uppercase hover:text-gray-400" to={""}>
                            see product
                        </Link>
                    </div>
                </div>
            </div>
            <Introduction />
            <Footer />
        </div>
    );
}

export default Home;