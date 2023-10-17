
import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Product = () => {
    
    return (
        <div>
            product
            <Link to = "/products/addproduct"> Add Product </Link>
            <br/>
            <Link to = "/products"> List product</Link>
            {/*  to know it that will happen nested routing */}
            <Outlet/>  

        </div>
    );
}

export default Product;
