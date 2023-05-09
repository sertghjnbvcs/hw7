import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cart = useSelector(state => state.app.cart);

    return (
        <div>
            <h2>My Store</h2>
            <p>Cart ({cart.length})</p>
        </div>
    );
};

export default Navbar;

