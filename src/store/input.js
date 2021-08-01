import {createSlice} from "@reduxjs/toolkit";

const inputslice=createSlice({
    name:"input",
    initialState:{
        value:""
    },
    reducers:{
        setvalue(state,action){
            state.value=action.payload;
        }
    }
})

export const inputsliceactions=inputslice.actions;
export default inputslice.reducer;