import { configureStore } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    cart: [],
};

const store = configureStore({
    reducer: {
        app: (state = initialState, action) => {
            switch (action.type) {
                case 'ADD_PRODUCTS':
                    return { ...state, products: action.payload };
                case 'ADD_PRODUCT':
                    return { ...state, products: [...state.products, action.payload] };
                case 'ADD_TO_CART':
                    return { ...state, cart: [...state.cart, action.payload] };
                default:
                    return state;
            }
        },
    },
});

export default store;
