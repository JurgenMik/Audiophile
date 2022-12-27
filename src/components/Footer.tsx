import React from 'react';
import {Link} from 'react-router-dom';
import {GrFacebook, GrInstagram, GrTwitter} from 'react-icons/gr';

function Footer() {
    return (
        <div className="w-full h-96 bg-black mt-60">
            <div className="w-3/4 h-full ml-auto mr-auto flex">
                <div className="w-1/2 h-full">
                    <div className="w-full h-32 flex items-center border-t-4 border-orange-500">
                        <img
                            src="../assets/logo.svg"
                            alt="logo"
                        />
                    </div>
                    <div className="w-full h-36">
                        <p className="text-neutral-500">
                            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists
                            who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week
                        </p>
                    </div>
                    <div className="w-full mt-4">
                        <p className="text-neutral-500 font-bold">
                            Copyright 2021. All Rights Reserved
                        </p>
                    </div>
                </div>
                <div className="w-1/2 h-full">
                    <div className="w-full h-32 flex items-center justify-end text-white uppercase space-x-16">
                        <Link className="hover:text-orange-400" to="/">
                            home
                        </Link>
                        <Link className="hover:text-orange-400" to="/headphones">
                            headphones
                        </Link>
                        <Link className="hover:text-orange-400" to="/speakers">
                            speakers
                        </Link>
                        <Link className="hover:text-orange-400" to="/earphones">
                            earphones
                        </Link>
                    </div>
                    <div className="w-full h-16 flex items-center justify-end text-white text-xl space-x-3">
                        <GrFacebook className="hover:text-gray-400" />
                        <GrTwitter className="hover:text-gray-400" />
                        <GrInstagram className="hover:text-gray-400" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;