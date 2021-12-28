import axios from "axios";
import React from "react";
import { FaHeart, FaRegStar, FaShoppingCart, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";


const ProductCard = ({ product }) => {
    const {
        _id,
        productName,
        productThumb,
        productRating,
        productType,
        productPrice,
        productPrevPrice
    } = product;
    const { user } = useAuth();
    const addedCart = {
        ...product,
        email: user.email,
        status: false,
        payment: false,
        quantity: 1,
    };
    const handleCart = () => {

        axios.post("https://still-shelf-07747.herokuapp.com/carts", {
                 ...addedCart,
             })
             .then((res) => {
                 if (res.data.insertedId) {
                     swal("Congratulations", "Product added successfully");
                 } else if (res.data.duplicate === true) {
                     swal("Sorry", "This product already added");
                 }
             });
    };
    const handleHeart = () => {
        axios.post(
                'https://still-shelf-07747.herokuapp.com/hearts',
                {
                    ...addedCart,
                }
            )
            .then(res => res.data)
            .then(data => {
                if (data.insertedId) {
                    swal("Congratulations", "Product added successfully");
                } else if (data.duplicate === true) {
                    swal("Sorry", "This product already added");
                }

        })
    };

    return (
        <div className='shadow-xl p-4 relative'>
            <div className='relative'>
                <img src={productThumb} alt='' />
                <span className='px-4 py-1 text-white font-bold absolute top-0 left-0 bg-primary'>
                    Sale
                </span>
            </div>
            <div className='text-center mt-4'>
                <Rating
                    emptySymbol={
                        <FaRegStar className='text-yellow-400'></FaRegStar>
                    }
                    fullSymbol={<FaStar className='text-yellow-400'></FaStar>}
                    initialRating={productRating}
                    readonly
                ></Rating>
            </div>
            <h2 className='text-center text-2xl text-primary font-bold pt-2'>
                {productName}
            </h2>
            <h3 className='text-center text-xl pb-2'>{productType}</h3>

            <div className='flex justify-between'>
                <h2> $ {productPrice}</h2>
                <del className='text-gray-400'> $ {productPrevPrice}</del>
            </div>
            <div className='bg-black opacity-60 p-4 absolute top-0 right-0 text-white'>
                <button onClick={handleHeart} className='block pb-2 rounded'>
                    <FaHeart></FaHeart>
                </button>
                <button onClick={handleCart} className='block py-1 rounded'>
                    <FaShoppingCart></FaShoppingCart>
                </button>
            </div>
            <div className='text-center flex justify-between my-2'>
                <button className='bg-primary text-white px-2 text-sm py-1 rounded'>
                    <NavLink to={`/shop/${_id}`}>View Details</NavLink>
                </button>
                <button className='bg-primary text-white px-2 text-sm py-1 rounded'>
                    <NavLink to={`/checkout/${_id}`}>Buy Now</NavLink>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
