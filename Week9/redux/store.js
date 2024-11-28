import { configureStore, createSlice } from "@reduxjs/toolkit";
import cartItems from "./items";


const initialState = {
    cartItems : cartItems,
    amount:0,
    total:0,
}

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state,action)=>{
            const itemid = action.payload
            const item  = state.cartItems.find((cartItems)=> cartItems.id === itemid )
            item.amount +=1;
            state.amount++;
            state.total+= parseInt(item.price);
        },
        decrement:(state,action)=>{
            const itemid = action.payload
            const item  = state.cartItems.find((cartItems)=> cartItems.id === itemid )
            item.amount -=1;
            state.amount--;
            state.total -= parseInt(item.price);
        },
        reset:(state)=>{
            state.cartItems.map((v)=>{v.amount = 0})
            state.amount = 0;
            state.total = 0;
        },
        totalcalculate:(state)=>{
            state.cartItems.map((v)=>{state.total += parseInt(v.price)})
            state.cartItems.map((v)=>{state.amount += 1})
        },
    }

})

export const { increment,decrement,reset,totalcalculate} = counterSlice.actions;

export default configureStore({
   reducer:{
    counter : counterSlice.reducer
   }
})