import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'Under construction',
};

const CategoriesSlice = createSlice({
  initialState,
  name: 'status',
  reducer: {
    checkStatus: (state, action) => {
      state.status = action.payload.status;
    },
  },
});

export const { checkStatus } = CategoriesSlice.actions;

export default CategoriesSlice.reducer;
