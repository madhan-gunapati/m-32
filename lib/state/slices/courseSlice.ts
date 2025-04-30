import { createSlice } from '@reduxjs/toolkit';

const courseSlice = createSlice({
  name: 'courseState',
  initialState: { courses:[] },
  reducers: {
    add_courses: (state, action) => {
        
        
        state.courses = action.payload;
     },
  },
});

export const { add_courses } = courseSlice.actions;
export default courseSlice.reducer;
