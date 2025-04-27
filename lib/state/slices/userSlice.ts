import { createSlice } from '@reduxjs/toolkit'
const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    id: '',
    image: '',
    provider: '',
  },
  reducers: {
    setUser: (state, action) => {
      
      if(action.payload) {
      state.name = action.payload.name
      state.email = action.payload.email
      state.id = action.payload.id
      state.image = action.payload.image
      state.provider = action.payload.provider
      }
    },
    clearUser: (state) => {
      state.name = ''
      state.email = ''
      state.id = ''
      state.image = ''
      state.provider = ''
    },
  }
})
export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer
export const selectUser = (state: any) => state.user 