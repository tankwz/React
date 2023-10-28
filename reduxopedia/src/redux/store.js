import { configureStore } from '@reduxjs/toolkit';
//import { counterReducer } from './slice/counterSlice';
import { counterReducer } from './slice/counterSlice';
export const store = configureStore({
  // reducer: {
  //   counterStore: counterReducer,
  // },
  reducer: {
    counterStoreName: counterReducer,
  },
});

// console.log(store.getState());

// store.dispatch({
//   type: 'counter/increment',
// });

// console.log(store.getState());
