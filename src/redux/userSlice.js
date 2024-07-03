import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    firstName: "",
    lastName: "",
    linkedin: "",
    facebook: "",
    instagram: "",
    twitter: "",
    mail: "",
    tiktok: "",
    image: null,
  },
};

export const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
