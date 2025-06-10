import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: 'Nikhil Thakur',
    age: 21,
    title: 'Software Engineer',
    email: 'nikhil@gmail.com',
    role: 'Full-Stack Developer',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
