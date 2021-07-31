import {createSlice} from '@reduxjs/toolkit'



const initialstate={
    icon:"",
    name:"",
    region:"",
    country:"",
    temp:"",
    wind:"",
    humidity:"",
    precipitation:""
}


const cityslice=createSlice({
    name:"city",
    initialState:initialstate,
    reducers:{

    }
})