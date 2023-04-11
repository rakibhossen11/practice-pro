import React, { useContext } from 'react';
import { ProductContext } from '../App';

const Shop = () => {
    const products = useContext(ProductContext);
    console.log(products);
    return (
        <div>
            kjkjfkg
        </div>
    );
};

export default Shop;