import { createSlice } from "@reduxjs/toolkit";

export interface Users {

}

export const initialState: Users = {

};

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {}, 
})
