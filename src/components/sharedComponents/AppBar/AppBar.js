import React, { useEffect, useState } from 'react';
import { FaBars, FaRegHeart, FaShoppingBag, FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import UserProfile from '../UserProfile/UserProfile';
import SidebarCart from '../SidebarCart/SidebarCart';
    
const Navigation = () => {
    const { user } = useAuth();
    const [changeHeader, setChangeHeader] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [cartInfo, setCartInfo] = useState([]);
    const [heartInfo, setHeartInfo] = useState([]);
    const [open, setOpen] = useState(false);
    const userEmail = user?.email;
    // Get Single User Cart information
    useEffect( () => {
        fetch(`https://still-shelf-07747.herokuapp.com/carts/${userEmail}`)
            .then((res) => res.json())
            .then((data) => setCartInfo(data));
    }, [userEmail]);

    // Get Single Usern Heart information
    useEffect(() => {
        fetch(`https://still-shelf-07747.herokuapp.com/hearts/${userEmail}`)
            .then((res) => res.json())
            .then((data) => setHeartInfo(data));
    }, [userEmail]);

    //header change function
    const onChangeHeader = () => {
        if (window.scrollY >= 150) {
            setChangeHeader(true);
        } else {
            setChangeHeader(false);
        }
    };
    const [profile, setProfile] = useState("hide");

    const toggle = () => {
        profile === "show" ? setProfile("hide") : setProfile("show");
    };

    //change header by scrolling
    window.addEventListener("scroll", onChangeHeader);
    return (
        <>
            {changeHeader ? (
                <header className='bg-primary fixed z-50 top-0 left-0 w-full shadow-md transition duration-500'>
                    <>
                        <div className='flex flex-wrap py-2'>
                            <div className='w-full px-4'>
                                <nav className='relative flex flex-wrap items-center justify-between'>
                                    <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
                                        <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
                                            <Link
                                                className='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white'
                                                to='/'
                                            >
                                                Bikez Ride
                                            </Link>
                                            <button
                                                className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
                                                type='button'
                                                onClick={() =>
                                                    setMenuOpen(!menuOpen)
                                                }
                                            >
                                                <FaBars></FaBars>
                                            </button>
                                        </div>
                                        <div
                                            className={
                                                "lg:flex flex-grow items-center" +
                                                (menuOpen ? " flex" : " hidden")
                                            }
                                            id='example-navbar-info'
                                        >
                                            <ul className='flex flex-col ml-auto items-center lg:flex-row list-none lg:ml-auto'>
                                                <li className='nav-item'>
                                                    <Link
                                                        className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                                                        to='/'
                                                    >
                                                        Home
                                                    </Link>
                                                </li>
                                                <li className='nav-item'>
                                                    <Link
                                                        className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                                                        to='/about-us'
                                                    >
                                                        About Us
                                                    </Link>
                                                </li>
                                                <li className='nav-item'>
                                                    <Link
                                                        className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                                                        to='/shop'
                                                    >
                                                        Shop
                                                    </Link>
                                                </li>
                                                <li className='nav-item'>
                                                    <Link
                                                        className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                                                        to='/contact'
                                                    >
                                                        Contact
                                                    </Link>
                                                </li>
                                                <li className='nav-item'>
                                                    <Link
                                                        className='relative px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                                                        to='/heart'
                                                    >
                                                        <FaRegHeart></FaRegHeart>
                                                        <span className='bg-black absolute right-0 top-0 rounded-full text-center w-4 h-4'>
                                                            {heartInfo.length}
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li className='nav-item mr-4'>
                                                    <Link
                                                        className='relative px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                                                        to='/cart'
                                                    >
                                                        <FaShoppingBag></FaShoppingBag>
                                                        <span className='bg-black absolute right-0 top-0 rounded-full text-center w-4 h-4'>
                                                            {cartInfo.length}
                                                        </span>
                                                    </Link>
                                                </li>
                                                
                                                <li className='relative text-white'>
                                                    {user?.photoURL ? (
                                                        <button
                                                            onClick={toggle}
                                                        >
                                                            <img
                                                                className='w-8 h-8 rounded-full'
                                                                src={
                                                                    user.photoURL
                                                                }
                                                                alt=''
                                                            />
                                                        </button>
                                                    ) : (
                                                        <button
                                                            onClick={toggle}
                                                            className='text-2xl'
                                                        >
                                                            <FaUserCircle></FaUserCircle>
                                                        </button>
                                                    )}
                                                    <div>
                                                        {profile === "show" ? (
                                                            <UserProfile></UserProfile>
                                                        ) : (
                                                            ""
                                                        )}
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </>
                </header>
            ) : (
                <header className='bg-primary'>
                    <>
                        <div className='flex flex-wrap py-2'>
                            <div className='w-full px-4'>
                                <nav className='relative flex flex-wrap items-center justify-between'>
                                    <div className='container mx-auto flex flex-wrap items-center justify-between'>
                                        <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
                                            <Link
                                                className='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white'
                                                to='/'
                                            >
                                                Bikez Ride
                                            </Link>
                                            <button
                                                className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
                                                type='button'
                                                onClick={() =>
                                                    setMenuOpen(!menuOpen)
                                                }
                                            >
                                                <FaBars></FaBars>
                                            </button>
                                        </div>
                                        <div
                                            className={
                                                "lg:flex flex-grow items-center" +
                                                (menuOpen ? " flex" : " hidden")
                                            }
                                            id='example-navbar-info'
                                        >
                                            <ul className='flex flex-col items-center lg:flex-row list-none ml-auto lg:ml-auto'>
                                                <li className='nav-item'>
                                                    <Link
                                                        className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                                                        to='/'
                                                    >
                                                        Home
                                                    </Link>
                                                </li>
                                                <li className='nav-item'>
                                                    <Link
                                                        className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                                                        to='/about-us'
                                                    >
                                                        About Us
                                                    </Link>
                                                </li>
                                                <li className='nav-item'>
                                                    <Link
                                                        className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                                                        to='/shop'
                                                    >
                                                        Shop
                                                    </Link>
                                                </li>
                                                <li className='nav-item'>
                                                    <Link
                                                        className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                                                        to='/contact'
                                                    >
                                                        Contact
                                                    </Link>
                                                </li>
                                                <li className='nav-item'>
                                                    <Link
                                                        className='relative px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                                                        to='/heart'
                                                    >
                                                        <FaRegHeart></FaRegHeart>
                                                        <span className='bg-black absolute right-0 top-0 rounded-full text-center w-4 h-4'>
                                                            {heartInfo.length}
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li className='nav-item mr-4'>
                                                    <Link
                                                        className='relative px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                                                        to='/cart'
                                                    >
                                                        <FaShoppingBag></FaShoppingBag>
                                                        <span className='bg-black absolute right-0 top-0 rounded-full text-center w-4 h-4'>
                                                            {cartInfo.length}
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li className='relative text-white'>
                                                    {user?.photoURL ? (
                                                        <button
                                                            onClick={toggle}
                                                        >
                                                            <img
                                                                className='w-8 h-8 rounded-full'
                                                                src={
                                                                    user.photoURL
                                                                }
                                                                alt=''
                                                            />
                                                        </button>
                                                    ) : (
                                                        <button
                                                            onClick={toggle}
                                                            className='text-2xl'
                                                        >
                                                            <FaUserCircle></FaUserCircle>
                                                        </button>
                                                    )}
                                                    <div>
                                                        {profile === "show" ? (
                                                            <UserProfile></UserProfile>
                                                        ) : (
                                                            ""
                                                        )}
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </>
                </header>
            )}
        </>
    );
};

export default Navigation;