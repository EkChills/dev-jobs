import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
email: string,
id: string,
image?: string,
name: string,
}

const initialState:InitialState = {
  email:'',
  id:'',
  image:'',
  name:''
}

export const userSlice = createSlice({
  initialState,
  name:'users',
  reducers:{

  }
})

export default userSlice.reducer