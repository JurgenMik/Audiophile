import React from 'react';
import {BsChevronRight} from 'react-icons/bs';
import {Link} from 'react-router-dom';

function ProductThumbnail() {
    return (
        <div className="w-1/2 h-56 ml-auto mr-auto mt-48 flex space-x-8">
            <div className="w-1/3 bg-gray-200 rounded-md relative">
                <img
                    className="absolute bottom-10"
                    src="../assets/image-category-thumbnail-headphones.png"
                    alt="headphones"
                />
                <div className="w-full h-full flex flex-col justify-end items-center pb-4">
                    <h1 className="uppercase text-lg font-bold">
                        headphones
                    </h1>
                    <div className="w-full h-10 flex justify-center items-center">
                        <Link className="uppercase text-sm text-gray-600 font-bold hover:text-gray-400" to={""}>
                            shop
                        </Link>
                        <BsChevronRight className="text-orange-500" />
                    </div>
                </div>
            </div>
            <div className="w-1/3 bg-gray-200 rounded-md relative">
                <img
                    className="absolute bottom-10"
                    src="../assets/image-category-thumbnail-speakers.png"
                    alt="headphones"
                />
                <div className="w-full h-full flex flex-col justify-end items-center pb-4">
                    <h1 className="uppercase text-lg font-bold">
                        speakers
                    </h1>
                    <div className="w-full h-10 flex justify-center items-center">
                        <Link className="uppercase text-sm text-gray-600 font-bold hover:text-gray-400" to={""}>
                            shop
                        </Link>
                        <BsChevronRight className="text-orange-500" />
                    </div>
                </div>
            </div>
            <div className="w-1/3 bg-gray-200 rounded-md relative">
                <img
                    className="absolute bottom-10"
                    src="../assets/image-category-thumbnail-earphones.png"
                    alt="headphones"
                />
                <div className="w-full h-full flex flex-col justify-end items-center pb-4">
                    <h1 className="uppercase text-lg font-bold">
                        earphones
                    </h1>
                    <div className="w-full h-10 flex justify-center items-center">
                        <Link className="uppercase text-sm text-gray-600 font-bold hover:text-gray-400" to={""}>
                            shop
                        </Link>
                        <BsChevronRight className="text-orange-500" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductThumbnail;