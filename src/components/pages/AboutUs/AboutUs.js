import React from 'react';
import AppBar from '../../sharedComponents/AppBar/AppBar'
import Footer from '../../sharedComponents/Footer/Footer';

const AboutUs = () => {
    return (
        <>
            <AppBar></AppBar>
            <div className='py-12 bg-gray-700'>
                <h2 className='text-center text-white text-6xl'>About US</h2>
            </div>
            <div className='container mx-auto'>
                <h2 className='my-8 text-4xl pl-4 md:pl-0'>About Us</h2>
                <div className='flex flex-col md:flex-row mb-12'>
                    <div className='md:w-1/2 md:mr-4 mb-4 md:mb-0 mx-4 md:mx-0 p-8 glass-effect'>
                        <img src={""} alt='' />
                        <h2 className='text-2xl font-semibold py-4 text-blue-500'>
                            Our story
                        </h2>
                        <p>
                            Nam dapibus nisl vitae elit fringilla rutrum. Aenean
                            sollicitudin, erat a elementum rutrum, neque sem
                            pretium metus, quis mollis nisl nunc et massa. Nam
                            dapibus nisl vitae elit fringilla rutrum. Aenean
                            sollicitudin, erat a elementum rutrum, neque sem
                            pretium metus, quis mollis nisl nunc et massa.
                        </p>
                    </div>
                    <div className='md:w-1/2 mx-4 md:mx-0 md:ml-4 p-8 glass-effect'>
                        <img src={""} alt='' />
                        <h2 className='text-2xl font-semibold py-4 text-blue-500'>
                            Our Mission
                        </h2>
                        <p>
                            Nam dapibus nisl vitae elit fringilla rutrum. Aenean
                            sollicitudin, erat a elementum rutrum, neque sem
                            pretium metus, quis mollis nisl nunc et massa. Nam
                            dapibus nisl vitae elit fringilla rutrum. Aenean
                            sollicitudin, erat a elementum rutrum, neque sem
                            pretium metus, quis mollis nisl nunc et massa.
                        </p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default AboutUs;