
import React, { useEffect, useMemo, useState } from 'react'
import { MdAdd, MdArrowBack, MdArrowRightAlt, MdDeleteOutline, MdRemove } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem, removeItem } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [deliveryCharge, setDeliveryCharge] = useState(40);

    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const resId = useSelector(state => state.menu.restaurantInfo?.id);

    const bill = useMemo(() => {
        return cartItems?.reduce((total, curr) => (
            total +
            (curr.details.price ?
                (curr.details.price / 100) :
                (curr.details.defaultPrice / 100))
            * curr.quantity
        ), 0)
    }, [cartItems])

    useEffect(() => {
        if (bill == 0) setDeliveryCharge(0);
    }, [bill])

    return (
        <div className='relative w-full py-10 min-h-[80vh]'>
            <Link to={'/menu/' + (resId ? resId : '523122')} className='absolute text-lg gap-2
             inline-flex items-center left-20 top-5 cursor-pointer'>
                <MdArrowBack size={25} />
                Menu
            </Link>
            <div className="flex flex-wrap">
                <div className="cart-wrapper w-full sm:w-auto sm:min-w-[50rem] max-w-screen mx-auto mb-5 p-5 sm:p-0 md:px-10 lg:pl-10">
                    <h1 className='mx-auto text-4xl mb-5 text-center py-2 font-semibold'>Your <span className='text-[#FF5201]'>Cart</span></h1>
                    <div className='cart-items-wrapper relative mx-auto p-5 py-8 min-h-[15rem] space-y-5 border border-black/10 rounded-xl'>
                        {cartItems.length == 0 && (
                            <div className='text-lg sm:text-4xl text-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-semibold'>
                                Your Cart Is Empty <br />
                                <Link to={'/menu/' + resId} className='text-lg capitalize text-blue-600/80 gap-2 inline-flex items-center left-20 top-5 cursor-pointer'>
                                    <MdArrowBack size={25} />
                                    Go to Menu
                                </Link>
                            </div>
                        )}
                        {cartItems?.map(item => (
                            <div key={item.id} className='cart-item bg-gray-100 pl-5 flex flex-wrap sm:flex-row items-center justify-between w-full rounded-2xl overflow-hidden shadow'>
                                <div className='flex flex-wrap sm:flex-row items-center py-3 sm:py-5'>
                                    <div className="overflow-hidden mr-5 rounded-2xl w-28 aspect-square">
                                        <img className='h-full w-full object-cover' src={(import.meta.env.VITE_IMG_BASE_URL + item.details?.imageId) || 'cartDefaultImage.png'} alt="" />
                                    </div>
                                    <div className='title'>
                                        <h1 className='text-lg sm:text-xl w-50 leading-tight overflow-hidden'>{item.details.name.split(" ").splice(0, 5).join(' ') || "Dish Name"}</h1>
                                        <p className='description text-xs opacity-30 whitespace-nowrap overflow-hidden'>
                                            {item.details.category || "Lorem ipsum dolor sit amet."}
                                        </p>
                                    </div>
                                    <div className='text-lg sm:text-xl w-24 text-center'>
                                        <span className='text-orange-600/80 text-lg mr-1'>₹</span>
                                        {item.details?.price ?
                                            ((item.details?.price / 100) * item.quantity).toFixed(2) :
                                            item.details?.defaultPrice ?
                                                ((item.details?.defaultPrice / 100) * item.quantity).toFixed(2) :
                                                "0.00"}
                                    </div>
                                    <div className='flex gap-2 ml-5 sm:gap-4 w-auto sm:w-auto overflow-hidden items-center-safe justify-between cursor-pointer text-lg bg-white rounded-lg border border-black/30 font-semibold text-green-600'>
                                        <button onClick={() => dispatch(removeItem(item.id))} className='cursor-pointer px-2 sm:px-3 h-full hover:bg-gray-200/70 py-3'>
                                            <MdRemove />
                                        </button>
                                        <h1 className='text-xl'>{item.quantity || 0}</h1>
                                        <button onClick={() => dispatch(addItem(item.details))}
                                            className='cursor-pointer px-2 sm:px-3 h-full hover:bg-gray-200/70 py-3'>
                                            <MdAdd />
                                        </button>
                                    </div>
                                </div>
                                <div onClick={() => dispatch(deleteItem(item.id))}
                                    className='cursor-pointer hidden sm:flex self-stretch px-10 w-auto relative hover:bg-gray-200 min-h-full py-3 sm:py-5 flex-col items-center'>
                                    <MdDeleteOutline color='red' className='my-auto text-4xl' />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='cart-summary-wrapper max-w-screen relative mx-auto px-5 sm:w-1/3 min-h-[50vh]'>
                    <div className="cart-summary sticky  top-20 w-fit space-y-5 mx-auto">
                        <h1 className='mx-auto text-4xl mb-5 text-center py-2 my-0 opacity-0 font-semibold'>Margin Text</h1>
                        <div className="bill-details shadow-md rounded-lg py-2 border border-black/10">
                            <h1 className='px-3 text-xl font-semibold mb-2'>Cart Total</h1>
                            <div className="flex justify-between py-1 px-3">
                                <h4 className='text-base text-left text-gray-400'>Subtotal</h4>
                                <h4 className='text-lg text-right text-gray-400'>₹ {bill.toFixed(2)}</h4>
                            </div>
                            <div className="flex justify-between py-1 px-3">
                                <h4 className='text-base text-left text-gray-400'>Delivery Charge</h4>
                                <h4 className='text-lg text-right text-gray-400'>₹ {deliveryCharge.toFixed(2)}</h4>
                            </div>
                            <div className="flex justify-between py-2 px-3">
                                <h4 className='text-lg text-left text-gray-600'>Total</h4>
                                <h4 className='text-lg text-right text-gray-500'>₹{(deliveryCharge + bill).toFixed(2)}</h4>
                            </div>
                        </div>
                        <div className="coupon-code max-w-full flex gap-2 items-center justify-between">
                            <input type="text" className='inline-block uppercase placeholder:capitalize text-sm w-fit border border-black/20 outline-none px-2 sm:px-5 rounded-lg py-2' placeholder='Coupon Code' />
                            <button className='text-sm py-2 px-2 sm:px-5 bg-[#f24c00]/90 hover:bg-orange-600/80 cursor-pointer capitalize rounded-lg text-white block whitespace-nowrap'>
                                Apply Coupon
                                <MdArrowRightAlt size={25} className='inline-block' />
                            </button>
                        </div>
                        <button className='text-md min-w-full px-10 py-2 bg-[#f24c00]/90 hover:bg-orange-600/80 cursor-pointer capitalize rounded-lg text-white block whitespace-nowrap'>
                            Proceed to checkout
                            <MdArrowRightAlt size={25} className='inline-block' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
