import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Shubham',
    email: 'shubhampurwar35@gmail.com',
  },
  reducers: {},
});

export default userSlice.reducer;
