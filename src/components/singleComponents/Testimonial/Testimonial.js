import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import "slick-carousel/slick/slick-theme.css";
import useReviews from '../../../hooks/useReviews';
import userImg from '../../../img/VhKI0hp.png';

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
                    <>
                        <div className='mx-4 flex max-w-lg pt-16'>
                            <div className='w-full rounded bg-gray-100 relative p-8'>
                                <div className='flex justify-between'>
                                    <div className='flex'>
                                        <div>
                                            <img
                                                className='h-12 w-12 rounded-full'
                                                src={userImg}
                                                alt=''
                                            />
                                        </div>
                                        <div className='ml-4'>
                                            <div className='font-bold'>
                                                {review?.name}
                                            </div>
                                            <div className='mt-1 text-xs text-gray-500'>
                                                {review?.designation}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-yellow-400 flex items-center'>
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
                                </div>
                                <div className='my-6 border-b' />
                                <div className='text-sm'>{review?.review}</div>
                            </div>
                        </div>
                    </>
                ))}
            </Slider>
        </div>
    );
};

export default Testimonial;