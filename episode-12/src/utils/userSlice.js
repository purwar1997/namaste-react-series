import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    updateUser(state, action) {
      state.name = action.payload.userName;
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
