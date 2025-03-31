import { configureStore, createSlice} from '@reduxjs/toolkit'

const initialState = { cnt: 0 };

const counterSlice = createSlice({
    name: "counter",
    initialState : initialState,
    reducers: {
      increment: (state) => { state.cnt += 1 }, // +1
      decrement: (state) => { state.cnt -= 1 }, // -1
      reset: (state) => { state.cnt = 0 },      // 0으로 초기화
    },
  });

  const store = configureStore({
    reducer: {
      count: counterSlice.reducer,
    },
  });

  export const { increment, decrement, reset } = counterSlice.actions;
export default store;