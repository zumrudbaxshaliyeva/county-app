import { createSlice } from '@reduxjs/toolkit'




const countrySlices = createSlice({
  name: 'country',
  initialState:{
   alma:[],
  
  },
  reducers: {
    fetchCountriesSuccess:(state,actions)=>{
        state.alma=actions.payload
    }
  },
})

export const { fetchCountriesSuccess} = countrySlices.actions
export const countryReducers= countrySlices.reducer