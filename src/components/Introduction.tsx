import React from 'react';

function Introduction() {
    return (
        <div className="w-3/4 h-76 ml-auto mr-auto grid grid-cols-2 mt-24">
            <div className="w-3/4 h-full flex flex-col justify-center space-y-8">
                <h1 className="uppercase text-5xl font-bold">
                    bringing you the <span className="text-orange-500">best</span> audio gear
                </h1>
                <p className="text-gray-500 text-lg">
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio
                    accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products.
                    Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </p>
            </div>
            <div className="w-full h-full flex justify-end">
                <img
                    className="rounded-lg"
                    src="../assets/image-best-gear.jpg"
                    alt="logo"
                />
            </div>
        </div>
    );
}

export default Introduction;