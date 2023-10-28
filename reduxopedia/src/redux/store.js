import { configureStore } from '@reduxjs/toolkit';
//import { counterReducer } from './slice/counterSlice';
import { counterReducer } from './slice/counterSlice';
import { desReducer } from './slice/destinationSlice';
export const store = configureStore({
  // reducer: {
  //   counterStore: counterReducer,
  // },
  reducer: {
    counterStoreName: counterReducer,
    desStoreName: desReducer,
  },
});

// console.log(store.getState());

// store.dispatch({
//   type: 'counter/increment',
// });

// console.log(store.getState());
