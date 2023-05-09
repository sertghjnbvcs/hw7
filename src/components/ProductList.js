import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.app.products);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakerapi.it/api/v1/products?_quantity=10');
            const data = await response.json();
            dispatch({ type: 'ADD_PRODUCTS', payload: data.data });
        };
        fetchProducts();
    }, [dispatch]);

    const handleAddToCart = product => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
