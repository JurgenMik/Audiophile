import React from 'react';
import {useNavigate} from "react-router-dom";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function Checkout({cart, quantity, total} : any) {

    let navigate : any = useNavigate();

    const vat = Math.floor(total * 0.2);
    const shipping = 50;

    const handleNavigateBack = () => {
        navigate(-1);
    }

    return (
        <div className="w-full min-h-screen bg-gray-200">
            <Nav />
            <div className="w-3/4 h-24 ml-auto mr-auto flex items-end">
                <h1 onClick={handleNavigateBack} className="text-gray-600 hover:text-gray-400">
                    Go Back
                </h1>
            </div>
            <div className="w-3/4 h-3/4 ml-auto mr-auto flex space-x-4 mt-10">
                <div className="w-2/3 h-full bg-white rounded-lg">
                    <div className="w-full h-36 flex items-center pl-10">
                        <h1 className="font-bold text-3xl uppercase">
                            checkout
                        </h1>
                    </div>
                    <div className="w-4/5 h-full pl-10">
                        <div className="w-full h-48">
                            <div className="w-full h-36 flex flex-col justify-center">
                                <h1 className="uppercase text-orange-500 font-bold">
                                    billing details
                                </h1>
                                <div className="w-full h-36 flex items-center space-x-4 pt-4">
                                    <div className="w-1/2 h-16 flex flex-col space-y-2">
                                        <label className="text-sm font-bold">Name</label>
                                        <input
                                            className="p-3 w-full border border-gray-300 rounded-lg"
                                            placeholder="Alexei Ward"
                                            type="text"
                                            name="name"
                                        />
                                    </div>
                                    <div className="w-1/2 h-16 flex flex-col space-y-2">
                                        <label className="text-sm font-bold">Email Address</label>
                                        <input
                                            className="p-3 w-full border border-gray-300 rounded-lg"
                                            placeholder="alexei@gmail.com"
                                            type="email"
                                            name="email"
                                        />
                                    </div>
                                </div>
                                <div className="w-full h-16 flex flex-col space-y-2 mt-8">
                                    <label className="text-sm font-bold">Phone Number</label>
                                    <input
                                        className="p-3 w-1/2 border border-gray-300 rounded-lg"
                                        placeholder="+1202-555-0136"
                                        type="number"
                                        name="phone_nb"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-48 mt-6">
                            <div className="w-full h-10 flex items-center">
                                <h1 className="uppercase text-orange-500 font-bold">
                                    shipping info
                                </h1>
                            </div>
                            <div className="w-full h-16 flex flex-col space-y-2 mt-4">
                                <label className="text-sm font-bold">Address</label>
                                <input
                                    className="p-3 w-full border border-gray-300 rounded-lg"
                                    placeholder="1137 Williams Avenue"
                                    type="text"
                                    name="address"
                                />
                            </div>
                            <div className="w-full h-36 flex items-center space-x-4">
                                <div className="w-1/2 h-16 flex flex-col space-y-2">
                                    <label className="text-sm font-bold">ZIP Code</label>
                                    <input
                                        className="p-3 w-full border border-gray-300 rounded-lg"
                                        placeholder="10001"
                                        type="number"
                                        name="zip"
                                    />
                                </div>
                                <div className="w-1/2 h-16 flex flex-col space-y-2">
                                    <label className="text-sm font-bold">City</label>
                                    <input
                                        className="p-3 w-full border border-gray-300 rounded-lg"
                                        placeholder="New York"
                                        type="text"
                                        name="city"
                                    />
                                </div>
                            </div>
                            <div className="w-1/2 h-16 flex flex-col space-y-2">
                                <label className="text-sm font-bold">Country</label>
                                <input
                                    className="p-3 w-full border border-gray-300 rounded-lg"
                                    placeholder="United States"
                                    type="text"
                                    name="country"
                                />
                            </div>
                        </div>
                        <div className="w-full h-72 mt-48">
                            <div className="w-full h-10 flex items-center">
                                <h1 className="uppercase text-orange-500 font-bold">
                                    payment details
                                </h1>
                            </div>
                            <div className="w-full flex h-36">
                                <div className="w-1/2">
                                    <h1 className="font-bold text-sm">
                                        Payment Method
                                    </h1>
                                </div>
                                <div className="w-1/2 flex flex-col space-y-2">
                                    <div className="w-full h-12 flex rounded-lg border border-gray-300">
                                        <div className="w-full h-full flex items-center pl-4 space-x-4">
                                            <input
                                                type="checkbox"
                                                name="e_money"
                                                className="h-3 w-3 focus:ring-0"
                                            />
                                            <h1 className="font-bold">
                                                e-Money
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="w-full h-12 flex rounded-lg border border-gray-300">
                                        <div className="w-full h-full flex items-center pl-4 space-x-4">
                                            <input
                                                type="checkbox"
                                                name="cash"
                                                className="h-3 w-3 focus:ring-0"
                                            />
                                            <h1 className="font-bold">
                                                Cash On Delivery
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex items-center space-x-4">
                                <div className="w-1/2 flex flex-col space-y-2">
                                    <label className="text-sm font-bold">e-Money Number</label>
                                    <input
                                        className="p-3 w-full border border-gray-300 rounded-lg"
                                        placeholder="238521993"
                                        type="number"
                                        name="e_money_nb"
                                    />
                                </div>
                                <div className="w-1/2 flex flex-col space-y-2">
                                    <label className="text-sm font-bold">e-Money PIN</label>
                                    <input
                                        className="p-3 w-full border border-gray-300 rounded-lg"
                                        placeholder="6891"
                                        type="number"
                                        name="e_money_pin"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 h-3/4">
                    <div className="w-4/5 h-full ml-auto mr-auto bg-white rounded-lg">
                        <div className="w-4/5 ml-auto mr-auto h-20 flex items-center">
                            <h1 className="uppercase font-bold text-lg">
                                summary
                            </h1>
                        </div>
                        <div className="w-4/5 ml-auto mr-auto">
                            {cart.map((products : any) => {
                                return (
                                    <div className="w-full flex mt-4" key={products.id}>
                                        <div className="w-1/4">
                                            <img
                                                className="w-full h-full"
                                                src={products.categoryImage.desktop}
                                                alt={products.name}
                                            />
                                        </div>
                                        <div className="w-2/4 flex flex-col justify-center pl-4 space-y-2">
                                            <h1 className="font-bold">
                                                {products.name}
                                            </h1>
                                            <h1 className="text-neutral-500 font-bold text-sm">
                                                ${products.price}
                                            </h1>
                                        </div>
                                        <div className="w-1/4 flex items-center justify-end">
                                            <div className="w-4/5 h-10 flex items-center justify-center space-x-6">
                                                {quantity.map((count : any) => {
                                                    if (count.id === products.id) {
                                                        return (
                                                            <p className="font-bold" key={count.id}>
                                                                x{count.quantity}
                                                            </p>
                                                        )
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="w-full h-8 flex items-center mt-8">
                                <h1 className="uppercase text-gray-400 font-bold">
                                    total
                                </h1>
                                <p className="ml-auto float-right text-black text-xl font-bold">
                                    ${total}
                                </p>
                            </div>
                            <div className="w-full h-8 flex">
                                <h1 className="uppercase text-gray-400 font-bold">
                                    shipping
                                </h1>
                                <p className="ml-auto float-right text-black text-xl font-bold">
                                    ${shipping}
                                </p>
                            </div>
                            <div className="w-full h-8 flex">
                                <h1 className="uppercase text-gray-400 font-bold">
                                    vat(included)
                                </h1>
                                <p className="ml-auto float-right text-black text-xl font-bold">
                                    ${vat}
                                </p>
                            </div>
                            <div className="w-full h-8 flex mt-4">
                                <h1 className="uppercase text-gray-400 font-bold">
                                    grand total
                                </h1>
                                <p className="ml-auto float-right text-orange-500 text-xl font-bold">
                                    ${total + vat + shipping}
                                </p>
                            </div>
                            <div className="flex justify-center pb-8 mt-8">
                                <button className="w-full h-10 bg-orange-500 uppercase text-white font-bold hover:text-gray-400">
                                    continue & pay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Checkout;