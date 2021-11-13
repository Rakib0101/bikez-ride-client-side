import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import "slick-carousel/slick/slick-theme.css";
import useReviews from '../../../hooks/useReviews';
import { FaUser } from 'react-icons/fa';

const Testimonial = () => {
    const [reviews] = useReviews();
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div>
            <Slider {...settings}>
                {reviews.map((review) => (
                    <div className='bg-white m-4 drop-shadow p-2'>
                        <div className='flex justify-between mx-2'>
                            <FaUser></FaUser>
                            <Rating
                                emptySymbol={
                                    <FaRegStar className='text-yellow-400'></FaRegStar>
                                }
                                fullSymbol={
                                    <FaStar className='text-yellow-400'></FaStar>
                                }
                                initialRating={review?.rating}
                                readonly
                            ></Rating>
                        </div>
                        <div>
                            <h3>{review?.review}</h3>
                            <h2>{review?.designation}</h2>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Testimonial;