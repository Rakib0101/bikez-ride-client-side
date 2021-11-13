import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth'

const BasicProfile = () => {
    const {user, logout} = useAuth()
    return (
        <div>
            <div className='bg-gray-200 grid grid-cols-1 divide-y-2 divide-gray-500 p-8 md:m-12 rounded'>
                <h2 className='text-4xl  py-4 my-4'>My Profile</h2>

                <div className='flex flex-col md:flex-row overflow-hidden pt-8'>
                    <div className=' md:w-1/4'>
                        {user?.photoURL ? (
                            <img
                                className='md:w-40 md:h-40 w-12 h-12 my-2 mx-auto rounded-full'
                                src={user?.photoURL}
                                alt=''
                            />
                        ) : (
                            <FaUserCircle className='md:w-40 md:h-40 w-16 h-16'></FaUserCircle>
                        )}
                        <div className='text-center mt-8'>
                            <button className='bg-primary px-8 py-2 my-4 text-xl text-black rounded'>
                                Edit Profile
                            </button>
                        </div>
                    </div>
                    <div className='w-3/4'>
                        <h2 className='text-2xl font-semibold'>Full Name</h2>
                        <h2 className='text-3xl'>{user.displayName}</h2>
                        <h2 className='text-2xl font-semibold'>
                            Email Address
                        </h2>
                        <h2 className='text-3xl'>{user.email}</h2>
                    </div>
                    <div>
                        <button
                            onClick={logout}
                            className='bg-primary my-4 px-8 py-2 text-xl text-black rounded'>
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasicProfile;