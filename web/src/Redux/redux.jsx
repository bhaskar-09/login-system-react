import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './slice/ui';
import authSlice from './slice/auth';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, auth: authSlice.reducer },
});

export default store;