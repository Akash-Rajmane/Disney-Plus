import  { createSlice } from "@reduxjs/toolkit";

const initialState = {
    url: {},
    genres: {},
};

const apiSlice = createSlice({
    name: "api",
    initialState,
    reducers: {
        getApiConfiguration: (state, action) => {
            state.url = action.payload;
        },
        getGenres: (state, action) => {
            state.genres = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGenres } = apiSlice.actions;

export default apiSlice.reducer;