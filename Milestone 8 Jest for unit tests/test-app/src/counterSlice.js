const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

// Async action
const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async (amount) => {
    const response = await new Promise((resolve) =>
      setTimeout(() => resolve(amount), 500)
    );
    return response;
  }
);

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    status: 'idle',
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

module.exports = {
  increment: counterSlice.actions.increment,
  decrement: counterSlice.actions.decrement,
  incrementAsync,
  default: counterSlice.reducer,
};
