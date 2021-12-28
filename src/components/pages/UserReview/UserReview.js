import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import axios from "axios";
import swal from "sweetalert";

const UserReview = () => {
    const { user } = useAuth()
    const [rating , setRating ] = useState('')
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const handleRatingChange = (r) => {
        setRating(r)
    }
    const onSubmit = (data) => {
        console.log(data);
        axios
            .post("https://still-shelf-07747.herokuapp.com/reviews", {
                ...data,
                rating: rating,
                email: user?.email,
            })
            .then((res) => {
                console.log(res.data);
                if (res.data?.insertedId) {
                    swal(
                        "Congratualations!!!",
                        `You have booking successfully`,
                        "success"
                    );
                    reset();
                }
            });
    };
    return (
        <>
            <div>
                <div className='bg-gray-100'>
                    <div className='w-2/3 ml-8 mt-8 p-4 border rounded'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className='w-full border p-2'
                                defaultValue={
                                    user?.displayName
                                        ? user.displayName
                                        : "Name Missing"
                                }
                                {...register("name", {
                                    required: true,
                                })}
                            />
                            {errors.exampleRequired && (
                                <span>This field is required</span>
                            )}
                            <input
                                className='w-full border p-2 my-4'
                                {...register("designation", {
                                    required: true,
                                })}
                                placeholder='Company '
                            />
                            {errors.exampleRequired && (
                                <span>This field is required</span>
                            )}
                            <textarea
                                className='w-full border p-2'
                                {...register("review", {
                                    required: true,
                                })}
                                rows='10'
                            ></textarea>
                            {errors.exampleRequired && (
                                <span>This field is required</span>
                            )}
                            <div className="flex my-4">
                                <h2 className="pr-8">Please give a rating</h2>
                                <Rating
                                    onChange={handleRatingChange}
                                    emptySymbol={
                                        <FaRegStar className='text-yellow-400'></FaRegStar>
                                    }
                                    fullSymbol={
                                        <FaStar className='text-yellow-400'></FaStar>
                                    }
                                    initialRating={0}
                                ></Rating>
                            </div>
                            <input
                                className='w-full border p-2 bg-primary'
                                type='submit'
                            />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserReview;