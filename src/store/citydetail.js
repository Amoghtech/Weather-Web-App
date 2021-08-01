import {createSlice} from "@reduxjs/toolkit";

const initialstate = {
  icon: "",
  name: "",
  region: "",
  country: "",
  temp: "",
  wind: "",
  humidity: "",
  precipitation: "",
  error: "",
};

const cityslice = createSlice({
  name: "city",
  initialState: initialstate,
  reducers: {
    setstate(state, action) {
      state = action.payload;
    },
    seterror(state, action) {
      state.error = action.payload;
    },
  },
});

export const citydetailsliceactions = cityslice.actions;
export default cityslice.reducer;
