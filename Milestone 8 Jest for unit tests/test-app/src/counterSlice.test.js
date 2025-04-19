const reducerModule = require('./counterSlice');
const reducer = reducerModule.default;
const { increment, decrement, incrementAsync } = reducerModule;
const { configureStore } = require('@reduxjs/toolkit');

describe('counter reducer', () => {
  const initialState = { value: 0, status: 'idle' };

  it('should return the initial state', () => {
    expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState);
  });

  it('should handle increment', () => {
    expect(reducer(initialState, increment())).toEqual({
      value: 1,
      status: 'idle',
    });
  });

  it('should handle decrement', () => {
    expect(reducer({ value: 1, status: 'idle' }, decrement())).toEqual({
      value: 0,
      status: 'idle',
    });
  });
});

describe('counter async actions', () => {
  it('should dispatch incrementAsync and update state', async () => {
    const store = configureStore({ reducer: reducer });

    await store.dispatch(incrementAsync(5));

    const state = store.getState();
    expect(state.value).toBe(5);
    expect(state.status).toBe('idle');
  });
});
