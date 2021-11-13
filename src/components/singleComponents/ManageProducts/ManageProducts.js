import React, { useState, useEffect } from "react";
import swal from "sweetalert";

const ManageProducts = () => {
    const [productsInfo, setProductsInfo] = useState([]);
    useEffect(() => {
        fetch(`https://morning-ridge-85275.herokuapp.com/products`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProductsInfo(data);
            });
    }, []);

    const handelCancel = (id) => {
        const proceed = window.confirm("Are you sure, You want to delete it?");
        if (proceed) {
            // let sliceId = e.target.textContent.slice(6);
            const url = `https://morning-ridge-85275.herokuapp.com/products/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        swal("Successfully delete the data.");
                        const remainingdata = productsInfo.filter(
                            (productInfo) => productInfo._id !== id
                        );
                        setProductsInfo(remainingdata);
                    }
                });
        }
    };
    console.log(productsInfo);

    return (
        <div className='m-8'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
                {productsInfo.map((productInfo) => (
                    <>
                        <div className='bg-gray-200  p-2 rounded'>
                            <img
                                className='w-1/3 mx-auto'
                                src={productInfo.productThumb}
                                alt=''
                            />
                            <div>
                                <h2>Product Name: {productInfo?.productName}</h2>
                                <h2>Product Price: {productInfo?.productPrice}</h2>
                                <h2>Brand Name: {productInfo?.brandName}</h2>
                                <h2>Availabilty: {productInfo?.stock}</h2>
                            </div>
                            <div className='mt-4 flex justify-between'>
                                
                                <button
                                    className='bg-primary rounded px-2 py-1 text-white'
                                    onClick={() => handelCancel(productInfo?._id)}
                                >
                                    Remove Products
                                </button>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default ManageProducts;
