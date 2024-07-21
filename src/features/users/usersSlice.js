import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'

const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await client.get('/fakeApi/users')
  return response.data
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload // Immer lets us update state in two ways: either mutating the existing state value, or returning a new result. If we return a new value, that will replace the existing state completely with whatever we return. (Note that if you want to manually return a new value, it's up to you to write any immutable update logic that might be needed.)
    })
  },
})

export default usersSlice.reducer
