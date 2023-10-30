import { configureStore } from '@reduxjs/toolkit';
import { destinationApi } from '../api/destinationApi';
import { randomDesApi } from '../api/randomDesApi';
export const store = configureStore({
  reducer: {
    [destinationApi.reducerPath]: destinationApi.reducer,
    [randomDesApi.reducerPath]: randomDesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(destinationApi.middleware)
      .concat(randomDesApi.middleware),
});
