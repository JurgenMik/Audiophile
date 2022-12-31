import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PaymentModal from "../components/PaymentModal";

function Checkout({cart, quantity, total} : any) {

    let navigate : any = useNavigate();

    const vat = Math.floor(total * 0.2);
    const shipping = 50;

    const [validate, setValidate] = useState({
        paymentMethodError: '',
        e_moneyError: '',
        emailError: ''
    })
    const [viewPaymentModal, setView] = useState<boolean>(false);
    const [billingInfo, setBilling] = useState<any>({
        name: '',
        email: '',
        phone_nb: 0,
        address: '',
        zip: 0,
        city: '',
        country: '',
        e_money: false,
        cash: false,
        e_money_pin: 0,
        e_money_nb: 0
    }
   );

    const handleNavigateBack = () => {
        navigate(-1);
    }

    const handleInfoChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setBilling({...billingInfo, [e.target.name] : e.target.value});
    }

    const handleCheckBoxChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setBilling({...billingInfo, [e.target.name] : e.target.checked});
    }

    const handleBillingValidation = () => {
        let paymentMethodError = '';
        let e_moneyError = '';
        let emailError = '';

        if (!billingInfo.email || !billingInfo.email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
            emailError = 'Invalid or Empty Email';
        }

        if (!billingInfo.cash && !billingInfo.e_money) {
            paymentMethodError = 'Please choose a payment method';
        }

        if (billingInfo.e_money && (!billingInfo.e_money_pin || !billingInfo.e_money_nb)) {
            e_moneyError = 'Please fill in all the fields for e-money';
        }

        if (paymentMethodError) {
            setValidate({...validate, paymentMethodError: paymentMethodError});
            return false;
        }

        if (e_moneyError) {
            setValidate({...validate, e_moneyError: e_moneyError});
            return false;
        }

        if (emailError) {
            setValidate({...validate, emailError: emailError});
            return false;
        }
        return true;
    }

    const handleViewPaymentModal = () => {
        const valid : boolean = handleBillingValidation();

        if (valid) { setView(true) }
    }

    return (
        <div className="w-full min-h-screen bg-gray-200">
            <Nav />
            <div className="w-3/4 h-24 ml-auto mr-auto flex items-end relative">
                <h1 onClick={handleNavigateBack} className="text-gray-600 hover:text-gray-400">
                    Go Back
                </h1>
            </div>
            <div className="w-3/4 h-3/4 ml-auto mr-auto flex space-x-4 mt-10">
                <div className="w-2/3 h-full bg-white rounded-lg">
                    {viewPaymentModal ? <PaymentModal cart={cart} vat={vat} shipping={shipping} quantity={quantity} total={total} /> : null}
                    <div className="w-full h-36 flex items-center pl-10">
                        <h1 className="font-bold text-3xl uppercase">
                            checkout
                        </h1>
                        {validate.paymentMethodError || validate.emailError || validate.e_moneyError ?
                            <div className="text-red-600 mb-2 ml-auto float-right pr-16 font-bold">
                                <h1>{validate.paymentMethodError}</h1>
                                <h1>{validate.emailError}</h1>
                                <h1>{validate.e_moneyError}</h1>
                            </div>
                            : null}
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
                                            onChange={handleInfoChange}
                                        />
                                    </div>
                                    <div className="w-1/2 h-16 flex flex-col space-y-2">
                                        <label className="text-sm font-bold">Email Address</label>
                                        <input
                                            className="p-3 w-full border border-gray-300 rounded-lg"
                                            placeholder="alexei@gmail.com"
                                            type="email"
                                            name="email"
                                            onChange={handleInfoChange}
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
                                        onChange={handleInfoChange}
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
                                    onChange={handleInfoChange}
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
                                        onChange={handleInfoChange}
                                    />
                                </div>
                                <div className="w-1/2 h-16 flex flex-col space-y-2">
                                    <label className="text-sm font-bold">City</label>
                                    <input
                                        className="p-3 w-full border border-gray-300 rounded-lg"
                                        placeholder="New York"
                                        type="text"
                                        name="city"
                                        onChange={handleInfoChange}
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
                                    onChange={handleInfoChange}
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
                                    <div className={`w-full h-12 flex rounded-lg border ${billingInfo.e_money ? "border-orange-500" : "border-gray-300"}`}>
                                        <div className="w-full h-full flex items-center pl-4 space-x-4">
                                            <input
                                                type="checkbox"
                                                name="e_money"
                                                className="appearance-none h-3 w-3 focus:ring-0 rounded-full border border-gray-500 checked:bg-orange-500 checked:border-0"
                                                checked={billingInfo.e_money}
                                                onChange={handleCheckBoxChange}
                                            />
                                            <h1 className="font-bold text-sm">
                                                e-Money
                                            </h1>
                                        </div>
                                    </div>
                                    <div className={`w-full h-12 flex rounded-lg border ${billingInfo.cash ? "border-orange-500" : "border-gray-300"}`}>
                                        <div className="w-full h-full flex items-center pl-4 space-x-4">
                                            <input
                                                type="checkbox"
                                                name="cash"
                                                className="appearance-none h-3 w-3 focus:ring-0 rounded-full border border-gray-500 checked:bg-orange-500 checked:border-0"
                                                checked={billingInfo.cash}
                                                onChange={handleCheckBoxChange}
                                            />
                                            <h1 className="font-bold text-sm">
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
                                        onChange={handleInfoChange}
                                    />
                                </div>
                                <div className="w-1/2 flex flex-col space-y-2">
                                    <label className="text-sm font-bold">e-Money PIN</label>
                                    <input
                                        className="p-3 w-full border border-gray-300 rounded-lg"
                                        placeholder="6891"
                                        type="number"
                                        name="e_money_pin"
                                        onChange={handleInfoChange}
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
                                <button onClick={handleViewPaymentModal} className="w-full h-10 bg-orange-500 uppercase text-white font-bold hover:text-gray-400">
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