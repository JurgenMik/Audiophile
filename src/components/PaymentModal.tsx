import React from 'react';
import {Link} from 'react-router-dom';

function PaymentModal({cart, vat, shipping, quantity, total} : any) {

    return (
        <div className="w-1/3 h-3/5 left-1/3 bg-white absolute shadow-[50px_15px_15px_1150px_rgba(0,0,0,0.56)] rounded-lg">
            <div className="w-4/5 h-full ml-auto mr-auto">
                <div className="w-full h-36 flex items-center">
                    <img
                        src="../assets/icon-order-confirmation.svg"
                        alt="confirmation"
                    />
                </div>
                <div className="w-1/2 h-16 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold uppercase">
                        thank you for your order
                    </h1>
                </div>
                <div className="w-full h-10 mt-4">
                    <p className="text-neutral-500">
                        You will receive an email confirmation shortly.
                    </p>
                </div>
                <div className="w-full h-36 flex mt-8">
                    <div className="w-1/2 h-full flex relative">
                        <div className="w-1/3 h-2/3 border-b border-neutral-300">
                            <img
                                src={cart[0].categoryImage.desktop}
                                alt="product"
                            />
                        </div>
                        <div className="w-1/3 h-2/3 flex flex-col justify-center space-y-1 pl-2 border-b border-neutral-300">
                            <h1 className="text-sm font-bold">
                                {cart[0].name}
                            </h1>
                            <p className="text-sm text-neutral-500 font-bold">
                                ${cart[0].price}
                            </p>
                        </div>
                        <div className="w-1/3 h-2/3 flex justify-center items-center text-sm border-b border-neutral-300">
                            {quantity.map((count : any) => {
                                if (count.id === cart[0].id) {
                                    return (
                                        <p className="font-bold" key={count.id}>
                                            x{count.quantity}
                                        </p>
                                    )
                                }
                            })}
                        </div>
                        <div className="absolute top-3/4 left-1/3">
                            <h1 className="text-gray-400 text-sm font-bold">
                                total products ({cart.length})
                            </h1>
                        </div>
                    </div>
                    <div className="w-1/2 h-full flex items-center bg-black rounded-r-lg">
                        <div className="w-4/5 h-1/2 ml-auto mr-auto">
                            <h1 className="text-gray-400 uppercase">
                                grand total
                            </h1>
                            <p className="text-white font-bold mt-4">
                                ${vat + shipping + total}
                            </p>
                        </div>
                    </div>
                </div>
                <Link className="w-full h-10 uppercase text-white flex items-center justify-center bg-orange-500 hover:text-gray-400 mt-8" to={"/"}>
                    back to home
                </Link>
            </div>
        </div>
    );
}

export default PaymentModal;