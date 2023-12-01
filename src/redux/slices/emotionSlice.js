import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching emotion data
export const fetchEmotion = createAsyncThunk(
    'emotion/fetchEmotion',
    async (text, thunkAPI) => {
        try {
            const response = await fetch('http://127.0.0.1:5000/emotion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text }),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const emotionSlice = createSlice({
    name: 'emotion',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmotion.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchEmotion.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchEmotion.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default emotionSlice.reducer;
