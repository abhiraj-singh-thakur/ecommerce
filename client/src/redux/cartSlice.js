import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart(state, action) {
            const product = action.payload;
            console.log('Product:', product)
            const currItem = product && product.attributes && product.attributes.key
                ? {
                    key: product.attributes.key,
                    title: product.attributes.Title,
                    price: product.attributes.Price,
                    image: product.attributes.Image.data.attributes.url
                }
                : action.payload;

            console.log('currItem:', currItem);
            const index = state.cart.findIndex((item) => item.key === currItem.key);

            if (index === -1) {
                state.cart.push({...currItem, quantity: 1});
            } else {
                state.cart[index].quantity += 1;
            }
            console.log('Cart:', state.cart);
        },
        //
        removeFromCart(state, action) {

            console.log('action:', action)
            const curKey = action.payload?.attributes?.key || action.payload.key;

            const index = state.cart.findIndex(
                (item) => item.key === curKey
            );
            if (index === -1) return;
            if (state.cart[index].quantity === 1) {
                state.cart = state.cart.filter(
                    (item) => item.key !== curKey
                );
            } else {
                state.cart[index].quantity -= 1;
            }
        },
        resetCart(state,action){
          state.cart = [];
        }
    },
});
export default cartSlice.reducer;
export const {addToCart, removeFromCart, resetCart} = cartSlice.actions;
