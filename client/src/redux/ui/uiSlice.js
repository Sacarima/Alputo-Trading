import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isMenuOpen: false,  // Initial state for menu toggle
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleMenu: state => {
            state.isMenuOpen = !state.isMenuOpen;  // Toggle the state
        },
    },
});

export const { toggleMenu } = uiSlice.actions;
export default uiSlice.reducer;
