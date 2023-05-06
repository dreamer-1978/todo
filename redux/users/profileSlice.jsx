import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userEmail: null,
  userPassword: null,
};

const ProfileUser = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    setPassword: (state, action) => {
      state.userPassword = action.payload;
    },
  },
});

export const { setEmail, setPassword } = ProfileUser.actions;
export default ProfileUser.reducer;
