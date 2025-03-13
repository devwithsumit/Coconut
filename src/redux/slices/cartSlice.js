import { createSlice } from "@reduxjs/toolkit";

// cartItem : {
//     id: '1',
//     quantity: 1,
//     item: { },
// },
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
    },
    reducers: {
        addItem: (state, action) => {
            const dish = action.payload;
            const idx = state.cartItems.findIndex((elem) => elem.id == dish.id);
            if (idx != -1) {
                state.cartItems[idx].quantity++;
            } else {
                state.cartItems.push({
                    id: dish.id,
                    quantity: 1,
                    details: dish,
                });
            }
        },
        removeItem: (state, action) => {
            const id = action.payload;
            const idx = state.cartItems.findIndex((elem) => elem.id == id);
            if (idx != -1) {
                if (state.cartItems[idx].quantity == 1) {
                    state.cartItems.splice(idx, 1);
                } else {
                    state.cartItems[idx].quantity--;
                }
            }
        },
        deleteItem: (state, action) => {
            const id = action.payload;
            
            const idx = state.cartItems.findIndex(item => item.id == id);
            if(idx != -1) state.cartItems.splice(idx, 1);
        },
        clearCart: (state) => {
            state.cartItems.length = 0;
            //Or 
            return { ...state, cartItems: [] };
        }
    }
})

export const { addItem, removeItem, clearCart, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;


// Trying to Understand the working or actions
// const state = {
//     cartItems: [{
//         id: '1',
//         quantity: 1,
//         item: {},
//     }],
// }
// const addItem = (action) => {
//     const item = action;
//     // console.log(action);
//     // console.log(state);

//     const idx = state.cartItems.findIndex((elem) => elem.id == item.id);
//     if (idx != -1) {
//         state.cartItems[idx].quantity++;
//     } else {
//         state.cartItems.push({
//             id: item.id,
//             quantity: 1,
//             item: item.dish,
//         });
//     }
// }
// const clearCart = () => {
//     state.cartItems.length = 0;
// }
// const removeItem = (action) => {
//     const id = action;
//     const idx = state.cartItems.findIndex((elem) => elem.id == id);
//     if (idx != -1) {
//         console.log(state.cartItems[idx].quantity);
//         if (state.cartItems[idx].quantity == 1) {
//             state.cartItems.splice(idx, 1);
//         }else {
//             state.cartItems[idx].quantity--;
//         }
//     }
// }

// addItem({
//     id: "2",
//     dish: {
//         name: 'pizza',
//         price: 120,
//         quantity: 1,
//     }
// })
// addItem({
//     id: "2",
//     dish: {
//         name: 'pizza',
//         price: 120,
//         quantity: 1,
//     }
// })
// addItem({
//     id: "3",
//     dish: {
//         name: 'burger',
//         price: 100,
//         quantity: 1,
//     }
// })

// console.log(state);
