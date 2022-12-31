import React from 'react';
import {Link} from "react-router-dom";
import {HiOutlineMinusSm, HiOutlinePlus} from "react-icons/hi";

function Cart({cart, setCart, quantity, setQuantity, total, setTotal} : any) {

    const handleRemoveAll = () => {
        setCart([]);

        setTotal(0);
    }

    const handleTotalPrice = (price : any, quantity : any) => {
        let itemsTotal : number = price * quantity;

        setTotal(total + itemsTotal);
    }

    const handleQuantityInc = (index : any) => {
        let quantities : any = [...quantity];

        quantities.map((count : any) => {
            if (count.id === index) { return count.quantity++ }

            setQuantity(quantities);
        })
    }

    const handleQuantityDec = (index : any) => {
        let quantities : any = [...quantity];

        quantities.map((count : any) => {
            if (count.id === index && count.quantity > 0) { return count.quantity-- }

            setQuantity(quantities);
        })
    }

    return (
        <div className="w-1/4 h-auto bg-white absolute top-50 right-60 mt-8 rounded-lg shadow-[10px_15px_15px_1300px_rgba(0,0,0,0.56)]">
            <div className="w-4/5 ml-auto mr-auto h-20 flex items-center">
                <h1 className="uppercase font-bold ml">
                    cart({cart.length})
                </h1>
                <p onClick={handleRemoveAll} className="text-sm ml-auto float-right hover:text-gray-400">
                    Remove all
                </p>
            </div>
            <div className="w-4/5 ml-auto mr-auto">
                {cart.map((products : any) => {
                    return (
                        <div className="w-full flex mt-8" key={products.id}>
                            <div className="w-1/5">
                                <img
                                    className="w-full h-full"
                                    src={products.categoryImage.desktop}
                                    alt={products.name}
                                />
                            </div>
                            <div className="w-2/5 flex flex-col justify-center pl-4 space-y-2">
                                <h1 className="font-bold">
                                    {products.name}
                                </h1>
                                <h1 className="text-neutral-500 font-bold text-sm">
                                    ${products.price}
                                </h1>
                            </div>
                            <div className="w-2/5 flex items-center justify-end">
                                <div className="w-4/5 h-10 bg-gray-200 flex items-center justify-center space-x-6">
                                    <HiOutlineMinusSm onClick={e => handleQuantityDec(products.id)} className="text-xs text-gray-400 hover:text-gray-600" />
                                    {quantity.map((count : any) => {
                                        if (count.id === products.id) {
                                            return (
                                                <p onClick={() => handleTotalPrice(products.price, count.quantity)} className="font-bold" key={count.id}>
                                                    {count.quantity}
                                                </p>
                                            )
                                        }
                                    })}
                                    <HiOutlinePlus onClick={e => handleQuantityInc(products.id)} className="text-xs text-gray-400 hover:text-gray-600" />
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="w-full h-16 flex items-center mt-4">
                    <h1 className="uppercase text-gray-400 font-bold">
                        total
                    </h1>
                    <p className="ml-auto float-right text-black text-xl font-bold">
                        ${total}
                    </p>
                </div>
                <div className="flex justify-center pb-8 mt-8">
                    <Link className="w-4/5 h-10 flex items-center text-white text-sm justify-center font-bold bg-orange-500 uppercase hover:text-gray-400" to={"/checkout"}>
                        checkout
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Cart;